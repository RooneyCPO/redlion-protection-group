#!/usr/bin/env node
// Reads content/team/*.md, parses YAML frontmatter + Markdown body,
// writes content/team.json. Runs at deploy time so CMS edits to team
// members appear on the live site without code changes.

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const TEAM_DIR = path.join(__dirname, 'content', 'team');
const OUT = path.join(__dirname, 'content', 'team.json');

function parseFile(filename) {
  const raw = fs.readFileSync(path.join(TEAM_DIR, filename), 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    console.warn(`skip ${filename}: no frontmatter`);
    return null;
  }
  let meta;
  try {
    meta = yaml.load(match[1]) || {};
  } catch (err) {
    console.warn(`skip ${filename}: bad YAML — ${err.message}`);
    return null;
  }
  return { ...meta, body: match[2].trim(), slug: filename.replace(/\.md$/, '') };
}

const files = fs.readdirSync(TEAM_DIR).filter(f => f.endsWith('.md') && !f.startsWith('_'));
const items = files
  .map(parseFile)
  .filter(Boolean)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

fs.writeFileSync(OUT, JSON.stringify({ items }, null, 2) + '\n');
console.log(`Wrote ${path.relative(__dirname, OUT)} with ${items.length} team members.`);
