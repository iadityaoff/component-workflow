#!/usr/bin/env node
/**
 * ═══════════════════════════════════════════════════════════════════
 * SUPABASE BATCH SEEDER — AI Ingestion Pipeline
 * ═══════════════════════════════════════════════════════════════════
 * Agents:
 *   Planner   → orchestrates batch order & retry logic
 *   Backend   → handles Supabase client auth & upsert strategy
 *   Debug     → catches partial failures, logs diagnostics
 *   QA        → validates row count & data integrity post-insert
 *
 * Usage:
 *   node scripts/seed-supabase.mjs
 *
 * Prerequisites:
 *   VITE_SUPABASE_URL=https://xxxx.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY=eyJ...  (service_role, NOT anon key)
 *
 * Strategy:
 *   1. Connect with service_role key (bypasses RLS for seeding)
 *   2. Load component catalogue from the compiled registry
 *   3. Process in configurable batch sizes to avoid timeouts
 *   4. Upsert (insert or update) for idempotent re-runs
 *   5. Log progress + final integrity check
 * ═══════════════════════════════════════════════════════════════════
 */

import { createClient } from "@supabase/supabase-js";

// ── Configuration ─────────────────────────────────────────────────
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SERVICE_KEY  = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BATCH_SIZE   = 50; // items per upsert round
const RETRY_LIMIT  = 3;
const RETRY_DELAY  = 2000; // ms

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error("❌ Missing env vars: VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY required.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false },
});

// ── Helpers ───────────────────────────────────────────────────────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function upsertBatch(rows, attempt = 1) {
  const { error } = await supabase
    .from("components")
    .upsert(rows, { onConflict: "slug", ignoreDuplicates: false });

  if (error) {
    if (attempt < RETRY_LIMIT) {
      console.warn(`  ⚠ Batch failed (attempt ${attempt}/${RETRY_LIMIT}): ${error.message}`);
      await sleep(RETRY_DELAY * attempt);
      return upsertBatch(rows, attempt + 1);
    }
    throw new Error(`Batch permanently failed: ${error.message}`);
  }
}

// ── Category seed ─────────────────────────────────────────────────
async function seedCategories(categories) {
  console.log(`\n📚 Seeding ${categories.length} categories…`);
  const rows = categories.map(c => ({
    slug: c.slug,
    name: c.name,
    count: c.count,
    group_key: c.group,
  }));
  const { error } = await supabase
    .from("categories")
    .upsert(rows, { onConflict: "slug" });
  if (error) throw new Error(`Category seed failed: ${error.message}`);
  console.log(`  ✅ ${rows.length} categories upserted.`);
}

// ── Component seed ────────────────────────────────────────────────
async function seedComponents(components) {
  const total = components.length;
  console.log(`\n🧩 Seeding ${total} components in batches of ${BATCH_SIZE}…`);

  let inserted = 0;
  const errors = [];

  for (let i = 0; i < total; i += BATCH_SIZE) {
    const batch = components.slice(i, i + BATCH_SIZE);
    const rows = batch.map(c => ({
      slug:           c.id,
      title:          c.title,
      description:    c.description,
      category_slug:  c.categorySlug,
      tags:           c.tags,
      code:           c.code,
      prompt:         c.prompt,
      preview_kind:   c.previewKind,
      featured:       c.featured,
      created_at:     new Date(c.createdAt).toISOString(),
      likes_count:    c.likes,
      views_count:    c.views,
      // author_id intentionally omitted — seeds have no auth owner
    }));

    try {
      await upsertBatch(rows);
      inserted += batch.length;
      const pct = Math.round((inserted / total) * 100);
      process.stdout.write(`  ⬆ ${inserted}/${total} (${pct}%)\r`);
    } catch (err) {
      errors.push({ batch: i / BATCH_SIZE + 1, message: err.message });
    }
  }

  console.log(`\n  ✅ ${inserted} components upserted.`);
  if (errors.length) {
    console.error(`  ❌ ${errors.length} batch(es) failed:`);
    errors.forEach(e => console.error(`    Batch ${e.batch}: ${e.message}`));
  }
}

// ── QA Integrity check ────────────────────────────────────────────
async function validateIntegrity(expectedCount) {
  console.log("\n🔍 QA: Validating row counts…");
  const { count, error } = await supabase
    .from("components")
    .select("*", { count: "exact", head: true });
  if (error) {
    console.warn("  ⚠ Could not verify count:", error.message);
    return;
  }
  const match = count >= expectedCount;
  console.log(`  📊 DB rows: ${count} | Expected ≥ ${expectedCount} → ${match ? "✅ PASS" : "❌ FAIL"}`);
}

// ── Main ──────────────────────────────────────────────────────────
async function main() {
  console.log("🚀 21stClone — Supabase Ingestion Pipeline");
  console.log("=".repeat(50));

  // Dynamically import ESM TypeScript-compiled output.
  // After running `npx tsc --module esnext`, the registry resolves to JS.
  // For quick dev usage, use tsx: `npx tsx scripts/seed-supabase.mjs`
  let components, categories;
  try {
    const { ALL_COMPONENTS } = await import("../src/data/components.ts");
    const { ALL_CATEGORIES } = await import("../src/data/categories.ts");
    components = ALL_COMPONENTS;
    categories = ALL_CATEGORIES;
  } catch {
    console.error("❌ Could not import source data. Run with: npx tsx scripts/seed-supabase.mjs");
    process.exit(1);
  }

  await seedCategories(categories);
  await seedComponents(components);
  await validateIntegrity(components.length);

  console.log("\n🏁 Pipeline complete.");
}

main().catch(err => {
  console.error("\n💥 Fatal error:", err.message);
  process.exit(1);
});
