import { createMDX } from 'fumadocs-mdx/next';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const withMDX = createMDX();

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/hindsight/docs',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Pin the workspace root so Turbopack doesn't pick a parent lockfile.
  turbopack: {
    root: projectRoot,
  },
};

export default withMDX(config);
