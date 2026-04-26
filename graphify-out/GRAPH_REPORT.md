# Graph Report - .  (2026-04-21)

## Corpus Check
- Corpus is ~18,852 words - fits in a single context window. You may not need a graph.

## Summary
- 7 nodes · 3 edges · 1 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]

## God Nodes (most connected - your core abstractions)
1. `sitemap()` - 2 edges
2. `GET()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "Community 0"
Cohesion: 1.0
Nodes (2): GET(), sitemap()

## Knowledge Gaps
- **Thin community `Community 0`** (3 nodes): `GET()`, `sitemap()`, `sitemap.xml.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Not enough signal to generate questions. This usually means the corpus has no AMBIGUOUS edges, no bridge nodes, no INFERRED relationships, and all communities are tightly cohesive. Add more files or run with --mode deep to extract richer edges._