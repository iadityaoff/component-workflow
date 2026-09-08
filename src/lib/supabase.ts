/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';
import type { ComponentItem } from '../data/components';

// These should be configured in your .env.local file.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Force non-null for TS if we know we'll have them in production, 
// or keep nullable and handle it in hooks.
// Given the errors, I will keep it non-null but use placeholders to avoid tsc errors in the client.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder'
);

/**
 * Fetch components from Supabase with a fallback to local registry.
 */
export async function fetchComponents(localFallback: ComponentItem[]): Promise<ComponentItem[]> {
  try {
    // If using placeholders, return fallback immediately
    if (supabaseUrl === '' || supabaseKey === '') return localFallback;

    const { data, error } = await supabase
      .from('components')
      .select('*')
      .order('featured', { ascending: false });

    if (error) throw error;
    if (!data || data.length === 0) return localFallback;

    return data as ComponentItem[];
  } catch (err) {
    console.error('Failed to fetch components from Supabase:', err);
    return localFallback;
  }
}
