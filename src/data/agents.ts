/**
 * Agent Registry Data Model
 * Seed data for AI agent configurations matching 21st.dev's Agent Registry
 */

export interface AgentConfig {
  id: string;
  name: string;
  description: string;
  /** Detailed markdown README */
  readme: string;
  model: string;
  category: AgentCategory;
  tags: string[];
  /** System prompt */
  systemPrompt: string;
  /** Connected MCP servers */
  mcpServers: MCPServer[];
  /** Author info */
  author: {
    name: string;
    handle: string;
    avatarText: string;
    avatarColor: string;
  };
  /** Stats */
  bookmarks: number;
  copies: number;
  createdAt: number;
  featured: boolean;
}

export interface MCPServer {
  label: string;
  url: string;
  icon?: string;
}

export type AgentCategory =
  | "coding"
  | "data-analysis"
  | "devops"
  | "content"
  | "research"
  | "customer-support"
  | "workflow"
  | "monitoring"
  | "multi-agent";

export const AGENT_CATEGORIES: { key: AgentCategory; label: string; description: string; count: number }[] = [
  { key: "coding", label: "Coding", description: "Code review, refactoring, PR automation", count: 5 },
  { key: "data-analysis", label: "Data Analysis", description: "Data pipelines, analytics, reporting", count: 3 },
  { key: "devops", label: "DevOps", description: "Deployment, monitoring, infrastructure", count: 3 },
  { key: "content", label: "Content", description: "Writing, editing, content generation", count: 3 },
  { key: "research", label: "Research", description: "Web research, knowledge synthesis", count: 3 },
  { key: "customer-support", label: "Customer Support", description: "Ticket handling, FAQ bots", count: 2 },
  { key: "workflow", label: "Workflow", description: "Cross-tool process automation", count: 2 },
  { key: "monitoring", label: "Monitoring", description: "Alerting, observability, incident response", count: 2 },
  { key: "multi-agent", label: "Multi-Agent", description: "Orchestrators that coordinate other agents", count: 2 },
];

const day = 24 * 60 * 60 * 1000;
const NOW = Date.UTC(2026, 3, 27);
function daysAgo(n: number): number { return NOW - n * day; }

export const SEED_AGENTS: AgentConfig[] = [
  // ── Coding ──
  {
    id: "pr-review-agent",
    name: "PR Review Agent",
    description: "Automated code review with security checks, performance analysis, and style enforcement. Creates Linear issues for follow-ups.",
    readme: "## PR Review Agent\n\nAutomated senior-level code review agent that checks every pull request for security issues, performance problems, and style violations.\n\n### How it works\n1. Triggered on PR creation or update\n2. Analyzes diff for common patterns\n3. Posts summary comment with findings\n4. Creates Linear issues for anything needing follow-up",
    model: "claude-sonnet-4-6",
    category: "coding",
    tags: ["github", "code-review", "security", "linear"],
    systemPrompt: `You are a senior code reviewer. For each PR:\n1. Check for security issues, performance problems, and style violations\n2. Create Linear issues for anything that needs follow-up\n3. Post a summary comment on the PR with your findings\nBe concise. Focus on what matters.`,
    mcpServers: [
      { label: "GitHub", url: "https://mcp.github.com" },
      { label: "Linear", url: "https://mcp.linear.app" },
    ],
    author: { name: "Sarah Chen", handle: "sarahc", avatarText: "SC", avatarColor: "bg-violet-500" },
    bookmarks: 342,
    copies: 1280,
    createdAt: daysAgo(3),
    featured: true,
  },
  {
    id: "refactor-assistant",
    name: "Refactor Assistant",
    description: "Identifies code smells, suggests refactoring patterns, and applies clean code principles across your codebase.",
    readme: "## Refactor Assistant\n\nAnalyzes your codebase for code smells and suggests actionable refactoring with before/after examples.",
    model: "claude-sonnet-4-6",
    category: "coding",
    tags: ["refactoring", "clean-code", "typescript"],
    systemPrompt: `You are a clean code expert. Analyze code for:\n- DRY violations\n- Complex conditionals\n- Long methods\n- Missing abstractions\nSuggest specific refactoring patterns with code examples.`,
    mcpServers: [{ label: "GitHub", url: "https://mcp.github.com" }],
    author: { name: "Alex Kim", handle: "alexk", avatarText: "AK", avatarColor: "bg-emerald-500" },
    bookmarks: 218,
    copies: 890,
    createdAt: daysAgo(7),
    featured: false,
  },
  {
    id: "test-generator",
    name: "Test Generator",
    description: "Auto-generates comprehensive test suites with edge cases, mocks, and assertions for any function or component.",
    readme: "## Test Generator\n\nGenerates unit, integration, and E2E tests with proper mocking and edge case coverage.",
    model: "claude-sonnet-4-6",
    category: "coding",
    tags: ["testing", "vitest", "playwright", "jest"],
    systemPrompt: `You are a testing expert. For any given code:\n1. Identify all code paths and edge cases\n2. Generate comprehensive test suites\n3. Use proper mocking patterns\n4. Include both happy path and error scenarios`,
    mcpServers: [{ label: "GitHub", url: "https://mcp.github.com" }],
    author: { name: "Jordan Lee", handle: "jlee", avatarText: "JL", avatarColor: "bg-sky-500" },
    bookmarks: 156,
    copies: 720,
    createdAt: daysAgo(12),
    featured: false,
  },
  {
    id: "docs-generator",
    name: "Documentation Generator",
    description: "Generates comprehensive API docs, README files, and inline documentation from your codebase.",
    readme: "## Documentation Generator\n\nScans your code and auto-generates markdown documentation, JSDoc comments, and README sections.",
    model: "claude-sonnet-4-6",
    category: "coding",
    tags: ["documentation", "readme", "jsdoc"],
    systemPrompt: `You are a technical writer. Analyze code and generate:\n- API documentation with examples\n- README sections\n- JSDoc/TSDoc comments\n- Architecture diagrams in mermaid`,
    mcpServers: [{ label: "GitHub", url: "https://mcp.github.com" }],
    author: { name: "Priya Patel", handle: "priyap", avatarText: "PP", avatarColor: "bg-rose-500" },
    bookmarks: 189,
    copies: 640,
    createdAt: daysAgo(5),
    featured: true,
  },
  {
    id: "ci-fixer",
    name: "CI Fixer",
    description: "Automatically detects and fixes CI/CD pipeline failures. Reads error logs, identifies root cause, and applies patches.",
    readme: "## CI Fixer\n\nWatches your CI pipeline and automatically fixes common failures like type errors, missing deps, and test flakes.",
    model: "claude-sonnet-4-6",
    category: "coding",
    tags: ["ci-cd", "github-actions", "automation"],
    systemPrompt: `You are a CI/CD expert. When a pipeline fails:\n1. Read the error logs\n2. Identify the root cause\n3. Apply the minimal fix\n4. Push and verify the fix passes`,
    mcpServers: [
      { label: "GitHub", url: "https://mcp.github.com" },
      { label: "Sentry", url: "https://mcp.sentry.io" },
    ],
    author: { name: "Mike Torres", handle: "miket", avatarText: "MT", avatarColor: "bg-amber-500" },
    bookmarks: 267,
    copies: 980,
    createdAt: daysAgo(2),
    featured: true,
  },

  // ── Data Analysis ──
  {
    id: "data-pipeline-agent",
    name: "Data Pipeline Agent",
    description: "Builds and optimizes data pipelines. Connects to PostgreSQL, transforms data, and generates reports.",
    readme: "## Data Pipeline Agent\n\nEnd-to-end data pipeline creation from raw SQL to polished reports.",
    model: "claude-sonnet-4-6",
    category: "data-analysis",
    tags: ["sql", "postgresql", "etl", "reporting"],
    systemPrompt: `You are a data engineer. Build efficient data pipelines:\n1. Write optimized SQL queries\n2. Design transformation logic\n3. Generate summary reports\n4. Identify data quality issues`,
    mcpServers: [{ label: "PostgreSQL", url: "https://mcp.postgresql.org" }],
    author: { name: "Lena Fischer", handle: "lenaf", avatarText: "LF", avatarColor: "bg-cyan-500" },
    bookmarks: 134,
    copies: 520,
    createdAt: daysAgo(8),
    featured: false,
  },
  {
    id: "analytics-dashboard",
    name: "Analytics Agent",
    description: "Analyzes user behavior data and generates actionable insights with visualization recommendations.",
    readme: "## Analytics Agent\n\nConverts raw analytics data into actionable business insights.",
    model: "claude-sonnet-4-6",
    category: "data-analysis",
    tags: ["analytics", "metrics", "visualization"],
    systemPrompt: `You are a data analyst. For any dataset:\n1. Identify key metrics and trends\n2. Generate statistical summaries\n3. Recommend visualizations\n4. Provide actionable insights`,
    mcpServers: [{ label: "PostgreSQL", url: "https://mcp.postgresql.org" }],
    author: { name: "Raj Gupta", handle: "rajg", avatarText: "RG", avatarColor: "bg-orange-500" },
    bookmarks: 98,
    copies: 380,
    createdAt: daysAgo(15),
    featured: false,
  },
  {
    id: "csv-processor",
    name: "CSV Processor",
    description: "Ingests, cleans, transforms, and analyzes CSV data files with natural language queries.",
    readme: "## CSV Processor\n\nDrop in any CSV and ask questions in natural language.",
    model: "claude-sonnet-4-6",
    category: "data-analysis",
    tags: ["csv", "data-cleaning", "natural-language"],
    systemPrompt: `You process CSV data. Capabilities:\n1. Clean and normalize data\n2. Answer natural language questions\n3. Generate pivot tables\n4. Export transformed data`,
    mcpServers: [],
    author: { name: "Emma Wilson", handle: "emmaw", avatarText: "EW", avatarColor: "bg-pink-500" },
    bookmarks: 76,
    copies: 290,
    createdAt: daysAgo(20),
    featured: false,
  },

  // ── DevOps ──
  {
    id: "deploy-agent",
    name: "Deploy Agent",
    description: "Automates deployment workflows. Handles Vercel, AWS, and Docker deployments with rollback support.",
    readme: "## Deploy Agent\n\nOne-command deployments with automatic rollback on failure.",
    model: "claude-sonnet-4-6",
    category: "devops",
    tags: ["deployment", "vercel", "docker", "aws"],
    systemPrompt: `You are a deployment engineer. Handle:\n1. Build and package applications\n2. Deploy to target environment\n3. Run health checks\n4. Rollback on failure`,
    mcpServers: [{ label: "GitHub", url: "https://mcp.github.com" }],
    author: { name: "Dev Sharma", handle: "devs", avatarText: "DS", avatarColor: "bg-teal-500" },
    bookmarks: 203,
    copies: 750,
    createdAt: daysAgo(4),
    featured: true,
  },
  {
    id: "infra-monitor",
    name: "Infrastructure Monitor",
    description: "Monitors server health, resource usage, and alerts on anomalies via Slack.",
    readme: "## Infrastructure Monitor\n\nReal-time infrastructure monitoring with intelligent alerting.",
    model: "claude-sonnet-4-6",
    category: "devops",
    tags: ["monitoring", "alerts", "slack", "uptime"],
    systemPrompt: `You monitor infrastructure. Tasks:\n1. Check server health metrics\n2. Detect anomalies in resource usage\n3. Alert via Slack with context\n4. Suggest remediation steps`,
    mcpServers: [
      { label: "Slack", url: "https://mcp.slack.com" },
      { label: "Sentry", url: "https://mcp.sentry.io" },
    ],
    author: { name: "Chris Park", handle: "chrisp", avatarText: "CP", avatarColor: "bg-indigo-500" },
    bookmarks: 145,
    copies: 560,
    createdAt: daysAgo(10),
    featured: false,
  },
  {
    id: "k8s-helper",
    name: "Kubernetes Helper",
    description: "Assists with Kubernetes deployments, pod management, and troubleshooting.",
    readme: "## Kubernetes Helper\n\nNatural language interface for managing Kubernetes clusters.",
    model: "claude-sonnet-4-6",
    category: "devops",
    tags: ["kubernetes", "k8s", "containers", "orchestration"],
    systemPrompt: `You are a Kubernetes expert. Help with:\n1. Writing and debugging manifests\n2. Pod and service management\n3. Troubleshooting crashes and OOMs\n4. Scaling and resource optimization`,
    mcpServers: [],
    author: { name: "Nina Chen", handle: "ninac", avatarText: "NC", avatarColor: "bg-lime-500" },
    bookmarks: 112,
    copies: 430,
    createdAt: daysAgo(14),
    featured: false,
  },

  // ── Content ──
  {
    id: "blog-writer",
    name: "Blog Writer",
    description: "Writes SEO-optimized blog posts with proper structure, meta tags, and internal linking.",
    readme: "## Blog Writer\n\nGenerates publication-ready blog posts with SEO optimization.",
    model: "claude-sonnet-4-6",
    category: "content",
    tags: ["blog", "seo", "writing", "content"],
    systemPrompt: `You are a content writer. For each blog post:\n1. Research the topic thoroughly\n2. Write with SEO best practices\n3. Include proper headings and meta description\n4. Suggest internal and external links`,
    mcpServers: [],
    author: { name: "Lisa Park", handle: "lisap", avatarText: "LP", avatarColor: "bg-fuchsia-500" },
    bookmarks: 167,
    copies: 620,
    createdAt: daysAgo(6),
    featured: false,
  },
  {
    id: "copy-editor",
    name: "Copy Editor",
    description: "Reviews and improves written content for clarity, grammar, tone, and brand consistency.",
    readme: "## Copy Editor\n\nProfessional editing that maintains your brand voice.",
    model: "claude-sonnet-4-6",
    category: "content",
    tags: ["editing", "grammar", "tone", "brand"],
    systemPrompt: `You are a professional copy editor. Review content for:\n1. Grammar and spelling\n2. Clarity and conciseness\n3. Tone consistency\n4. Brand voice alignment`,
    mcpServers: [{ label: "Notion", url: "https://mcp.notion.so" }],
    author: { name: "Tom Baker", handle: "tomb", avatarText: "TB", avatarColor: "bg-red-500" },
    bookmarks: 89,
    copies: 340,
    createdAt: daysAgo(18),
    featured: false,
  },
  {
    id: "social-media-agent",
    name: "Social Media Agent",
    description: "Creates engaging social media posts for X, LinkedIn, and Product Hunt launches.",
    readme: "## Social Media Agent\n\nCrafts platform-specific social media content.",
    model: "claude-sonnet-4-6",
    category: "content",
    tags: ["social-media", "twitter", "linkedin", "marketing"],
    systemPrompt: `You create social media content. For each platform:\n1. Adapt tone and format\n2. Optimize for engagement\n3. Include relevant hashtags\n4. A/B test variations`,
    mcpServers: [{ label: "Slack", url: "https://mcp.slack.com" }],
    author: { name: "Maya Johnson", handle: "mayaj", avatarText: "MJ", avatarColor: "bg-yellow-500" },
    bookmarks: 134,
    copies: 480,
    createdAt: daysAgo(9),
    featured: false,
  },

  // ── Research ──
  {
    id: "web-researcher",
    name: "Web Researcher",
    description: "Deep web research with source verification, citation generation, and structured summaries.",
    readme: "## Web Researcher\n\nComprehensive research agent that verifies sources and generates cited reports.",
    model: "claude-sonnet-4-6",
    category: "research",
    tags: ["research", "web-search", "citations", "analysis"],
    systemPrompt: `You are a research analyst. For each query:\n1. Search and cross-reference multiple sources\n2. Verify claims with citations\n3. Generate structured summaries\n4. Highlight key findings and gaps`,
    mcpServers: [],
    author: { name: "David Lin", handle: "davidl", avatarText: "DL", avatarColor: "bg-blue-500" },
    bookmarks: 234,
    copies: 890,
    createdAt: daysAgo(1),
    featured: true,
  },
  {
    id: "competitor-analyst",
    name: "Competitor Analyst",
    description: "Tracks and analyzes competitor products, features, pricing, and market positioning.",
    readme: "## Competitor Analyst\n\nAutomated competitive intelligence gathering and analysis.",
    model: "claude-sonnet-4-6",
    category: "research",
    tags: ["competitive-analysis", "market-research", "pricing"],
    systemPrompt: `You are a competitive analyst. Track:\n1. Product feature comparisons\n2. Pricing model changes\n3. Market positioning shifts\n4. Strategic recommendations`,
    mcpServers: [],
    author: { name: "Anna Berg", handle: "annab", avatarText: "AB", avatarColor: "bg-purple-500" },
    bookmarks: 178,
    copies: 670,
    createdAt: daysAgo(11),
    featured: false,
  },
  {
    id: "lead-research-agent",
    name: "Lead Research Agent",
    description: "Qualifies leads by researching company data, tech stack, team size, and recent funding via web search.",
    readme: "## Lead Research Agent\n\nAuto-qualifies signups by researching their company and alerting via Slack.",
    model: "claude-sonnet-4-6",
    category: "research",
    tags: ["leads", "qualification", "sales", "slack"],
    systemPrompt: `You research and qualify leads. For each signup:\n1. Research the company (size, funding, tech stack)\n2. Score lead quality (1-10)\n3. Generate a brief profile\n4. Alert sales via Slack for high-quality leads`,
    mcpServers: [{ label: "Slack", url: "https://mcp.slack.com" }],
    author: { name: "James Wu", handle: "jamesw", avatarText: "JW", avatarColor: "bg-emerald-600" },
    bookmarks: 145,
    copies: 520,
    createdAt: daysAgo(8),
    featured: true,
  },

  // ── Customer Support ──
  {
    id: "support-agent",
    name: "Support Agent",
    description: "Docs-powered Q&A with email escalation. Answers common questions from your documentation.",
    readme: "## Support Agent\n\nFirst-line support that answers from docs and escalates complex issues.",
    model: "claude-sonnet-4-6",
    category: "customer-support",
    tags: ["support", "docs", "email", "helpdesk"],
    systemPrompt: `You are a support agent. For each query:\n1. Search documentation for answers\n2. Provide clear, helpful responses\n3. Escalate to human if confidence < 80%\n4. Log interaction for improvement`,
    mcpServers: [{ label: "Notion", url: "https://mcp.notion.so" }],
    author: { name: "Sophie Martin", handle: "sophiem", avatarText: "SM", avatarColor: "bg-cyan-600" },
    bookmarks: 198,
    copies: 740,
    createdAt: daysAgo(4),
    featured: true,
  },
  {
    id: "ticket-triager",
    name: "Ticket Triager",
    description: "Automatically categorizes, prioritizes, and routes support tickets to the right team.",
    readme: "## Ticket Triager\n\nIntelligent ticket routing based on content analysis.",
    model: "claude-sonnet-4-6",
    category: "customer-support",
    tags: ["tickets", "triage", "routing", "priority"],
    systemPrompt: `You triage support tickets. For each ticket:\n1. Analyze content and sentiment\n2. Categorize (bug, feature, question, billing)\n3. Set priority (P0-P3)\n4. Route to appropriate team`,
    mcpServers: [
      { label: "Linear", url: "https://mcp.linear.app" },
      { label: "Slack", url: "https://mcp.slack.com" },
    ],
    author: { name: "Ryan Kim", handle: "ryank", avatarText: "RK", avatarColor: "bg-orange-600" },
    bookmarks: 123,
    copies: 460,
    createdAt: daysAgo(13),
    featured: false,
  },

  // ── Workflow ──
  {
    id: "standup-bot",
    name: "Standup Bot",
    description: "Collects daily standup updates from Slack and compiles them into a structured summary.",
    readme: "## Standup Bot\n\nAsync standup collection and summarization.",
    model: "claude-sonnet-4-6",
    category: "workflow",
    tags: ["standup", "slack", "meetings", "summary"],
    systemPrompt: `You facilitate async standups. Tasks:\n1. Collect updates from team members\n2. Identify blockers\n3. Generate summary report\n4. Highlight cross-team dependencies`,
    mcpServers: [{ label: "Slack", url: "https://mcp.slack.com" }],
    author: { name: "Eva Torres", handle: "evat", avatarText: "ET", avatarColor: "bg-violet-600" },
    bookmarks: 167,
    copies: 590,
    createdAt: daysAgo(6),
    featured: false,
  },
  {
    id: "email-agent",
    name: "Email Agent",
    description: "Send, read, and auto-reply to emails. Drafts responses based on context and previous conversations.",
    readme: "## Email Agent\n\nIntelligent email automation with context-aware responses.",
    model: "claude-sonnet-4-6",
    category: "workflow",
    tags: ["email", "automation", "responses"],
    systemPrompt: `You manage emails. Capabilities:\n1. Read and categorize incoming emails\n2. Draft context-aware replies\n3. Auto-respond to common patterns\n4. Escalate urgent messages`,
    mcpServers: [],
    author: { name: "Noah Park", handle: "noahp", avatarText: "NP", avatarColor: "bg-sky-600" },
    bookmarks: 145,
    copies: 530,
    createdAt: daysAgo(7),
    featured: false,
  },

  // ── Monitoring ──
  {
    id: "slack-monitor",
    name: "Slack Monitor",
    description: "Track services, alert on Slack when issues arise, and provide context for incident response.",
    readme: "## Slack Monitor\n\nReal-time service monitoring with Slack-native alerting.",
    model: "claude-sonnet-4-6",
    category: "monitoring",
    tags: ["slack", "monitoring", "alerts", "uptime"],
    systemPrompt: `You monitor services. Tasks:\n1. Check endpoint health\n2. Track response times\n3. Alert on Slack with full context\n4. Suggest remediation steps`,
    mcpServers: [
      { label: "Slack", url: "https://mcp.slack.com" },
      { label: "Sentry", url: "https://mcp.sentry.io" },
    ],
    author: { name: "Kate Morris", handle: "katem", avatarText: "KM", avatarColor: "bg-red-600" },
    bookmarks: 156,
    copies: 580,
    createdAt: daysAgo(5),
    featured: false,
  },
  {
    id: "error-tracker",
    name: "Error Tracker",
    description: "Aggregates, deduplicates, and triages runtime errors from Sentry with auto-fix suggestions.",
    readme: "## Error Tracker\n\nIntelligent error aggregation and auto-fix suggestions.",
    model: "claude-sonnet-4-6",
    category: "monitoring",
    tags: ["sentry", "errors", "debugging", "triage"],
    systemPrompt: `You track and triage errors. For each error:\n1. Identify root cause from stack trace\n2. Check if it's a known issue\n3. Suggest fix with code snippet\n4. Prioritize based on frequency and impact`,
    mcpServers: [{ label: "Sentry", url: "https://mcp.sentry.io" }],
    author: { name: "Leo Zhang", handle: "leoz", avatarText: "LZ", avatarColor: "bg-amber-600" },
    bookmarks: 134,
    copies: 490,
    createdAt: daysAgo(9),
    featured: false,
  },

  // ── Multi-Agent ──
  {
    id: "project-orchestrator",
    name: "Project Orchestrator",
    description: "Coordinates multiple agents to complete complex projects. Plans, delegates, and verifies work.",
    readme: "## Project Orchestrator\n\nMeta-agent that breaks down projects and delegates to specialized agents.",
    model: "claude-sonnet-4-6",
    category: "multi-agent",
    tags: ["orchestration", "planning", "delegation", "meta"],
    systemPrompt: `You orchestrate complex projects. Process:\n1. Break down the project into tasks\n2. Assign tasks to appropriate specialist agents\n3. Monitor progress and resolve blockers\n4. Verify and integrate results`,
    mcpServers: [
      { label: "GitHub", url: "https://mcp.github.com" },
      { label: "Linear", url: "https://mcp.linear.app" },
      { label: "Slack", url: "https://mcp.slack.com" },
    ],
    author: { name: "Aditya T.", handle: "adityat", avatarText: "AT", avatarColor: "bg-violet-500" },
    bookmarks: 298,
    copies: 1100,
    createdAt: daysAgo(1),
    featured: true,
  },
  {
    id: "review-chain",
    name: "Review Chain",
    description: "Multi-agent review pipeline: Code Review → Security Audit → Performance Check → Final Approval.",
    readme: "## Review Chain\n\nChains multiple review agents for comprehensive code quality checks.",
    model: "claude-sonnet-4-6",
    category: "multi-agent",
    tags: ["review", "chain", "pipeline", "quality"],
    systemPrompt: `You run a review chain. Stages:\n1. Code Review Agent checks logic and style\n2. Security Agent audits for vulnerabilities\n3. Performance Agent checks for bottlenecks\n4. Approval Agent gives final go/no-go`,
    mcpServers: [{ label: "GitHub", url: "https://mcp.github.com" }],
    author: { name: "Clara Santos", handle: "claras", avatarText: "CS", avatarColor: "bg-rose-600" },
    bookmarks: 187,
    copies: 670,
    createdAt: daysAgo(3),
    featured: false,
  },
];

export const AGENT_BY_ID: Record<string, AgentConfig> = Object.fromEntries(
  SEED_AGENTS.map((a) => [a.id, a]),
);
