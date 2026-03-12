#!/usr/bin/env node

/**
 * Syncs CLAUDE.md content to AI assistant rule files.
 * Add new targets to the array below to extend.
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const ROOT = resolve(dirname(new URL(import.meta.url).pathname), "..");
const SOURCE = resolve(ROOT, "CLAUDE.md");

const TARGETS = [
  ".github/copilot-instructions.md",
  ".windsurfrules",
  "AGENTS.md",
  // Add more targets here, e.g.:
  // ".cursorrules",
];

const content = readFileSync(SOURCE, "utf-8");

console.log(`\nSource: CLAUDE.md`);
console.log(`Targets:\n`);

for (const target of TARGETS) {
  const dest = resolve(ROOT, target);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, content, "utf-8");
  console.log(`  ✓ ${target}`);
}

console.log(`\nSynced ${TARGETS.length} file(s).\n`);
