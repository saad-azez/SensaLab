import * as esbuild from 'esbuild';
import fs from 'fs';
import { readdirSync } from 'fs';
import { join, sep } from 'path';

// Config output
const BUILD_DIRECTORY = 'dist';
const PRODUCTION = process.env.NODE_ENV === 'production';

// Config entrypoint files
const ENTRY_POINTS = ['src/index.ts'];

// Config dev serving
const LIVE_RELOAD = !PRODUCTION;
const SERVE_PORT = 3000;
const SERVE_ORIGIN = `http://localhost:${SERVE_PORT}`;

// Ensure output directory exists
if (!fs.existsSync(BUILD_DIRECTORY)) {
  fs.mkdirSync(BUILD_DIRECTORY, { recursive: true });
}

// Create context
const context = await esbuild.context({
  bundle: true,
  entryPoints: ENTRY_POINTS,
  outdir: BUILD_DIRECTORY,

  // Emit assets into dist/assets
  assetNames: 'assets/[name]-[hash]',

  minify: PRODUCTION,
  sourcemap: !PRODUCTION,
  target: PRODUCTION ? 'es2020' : 'esnext',

  // LOADERS (THIS FIXES IMAGE ERRORS)
  loader: {
    '.css': 'css',
    '.png': 'file',
    '.jpg': 'file',
    '.jpeg': 'file',
    '.webp': 'file',
    '.avif': 'file',
    '.svg': 'file',
    '.gif': 'file',
  },

  inject: LIVE_RELOAD ? ['./bin/live-reload.js'] : undefined,

  define: {
    SERVE_ORIGIN: JSON.stringify(SERVE_ORIGIN),
  },
});

// Build files in prod
if (PRODUCTION) {
  await context.rebuild();
  await context.dispose();
}

// Watch and serve files in dev
else {
  // IMPORTANT: perform initial build
  await context.rebuild();

  await context.watch();

  await context.serve({
    servedir: BUILD_DIRECTORY,
    port: SERVE_PORT,
  });

  logServedFiles();
}

/**
 * Logs information about the files that are being served during local development.
 */
function logServedFiles() {
  if (!fs.existsSync(BUILD_DIRECTORY)) {
    console.warn(`Build directory "${BUILD_DIRECTORY}" does not exist yet.`);
    return;
  }

  const getFiles = (dirPath) => {
    return readdirSync(dirPath, { withFileTypes: true }).flatMap((dirent) => {
      const path = join(dirPath, dirent.name);
      return dirent.isDirectory() ? getFiles(path) : path;
    });
  };

  const files = getFiles(BUILD_DIRECTORY);

  if (!files.length) {
    console.warn('No build files found yet.');
    return;
  }

  const filesInfo = files
    .map((file) => {
      if (file.endsWith('.map')) return;

      const paths = file.split(sep);
      paths[0] = SERVE_ORIGIN;

      const location = paths.join('/');

      const tag = location.endsWith('.css')
        ? `<link href="${location}" rel="stylesheet" type="text/css"/>`
        : `<script defer src="${location}"></script>`;

      return {
        'File Location': location,
        'Import Suggestion': tag,
      };
    })
    .filter(Boolean);

  console.table(filesInfo);
}
