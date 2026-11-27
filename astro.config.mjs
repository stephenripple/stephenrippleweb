// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.stephenripple.com',
  output: 'static',
  // S3 serves /about/index.html for /about/ — keep directory-style URLs
  build: { format: 'directory' },
  trailingSlash: 'ignore',
});
