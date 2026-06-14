import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// Static search index for `output: 'export'`.
// Fumadocs UI loads `static-json` mode against /api/search/static.json.
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source);
