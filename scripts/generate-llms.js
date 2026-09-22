// Generates public/llms.txt and public/llms-full.txt from src/resume.json.
// Runs automatically before `npm run build` (see "prebuild" in package.json).
// The Experience section (resume.work) is intentionally never included.
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://jcoelho93.netlify.app";
const root = path.join(__dirname, "..");
const resume = require(path.join(root, "src", "resume.json"));
const { basics, skills, certificates } = resume;

const location = `${basics.location.region}, ${basics.location.country}`;
const summaryParagraphs = basics.summary
  .split(/<br\s*\/?>/i)
  .map((p) => p.trim())
  .filter(Boolean);
const devTo = basics.profiles.find((p) => p.network === "DEV Community");

const profileLinks = basics.profiles.map(
  (p) => `- [${p.network}](${p.url}): ${p.username}`
);

const llms = [
  `# ${basics.name}`,
  "",
  `> ${basics.label} based in ${location}.`,
  "",
  summaryParagraphs[0],
  "",
  "## Site",
  "",
  `- [About Me](${SITE_URL}/#aboutMe): Introduction and summary`,
  `- [Skills](${SITE_URL}/#skills): ${skills.map((s) => s.name).join(", ")}`,
  `- [Certifications](${SITE_URL}/#certifications): ${certificates.length} professional certifications`,
  `- [Articles](${SITE_URL}/#articles): Latest articles from DEV Community`,
  `- [Full text](${SITE_URL}/llms-full.txt): All site content as a single markdown file`,
  "",
  "## Profiles",
  "",
  ...profileLinks,
  "",
];

const llmsFull = [
  `# ${basics.name}`,
  "",
  `> ${basics.label} based in ${location}.`,
  "",
  `Website: ${SITE_URL}`,
  "",
  "## About Me",
  "",
  ...summaryParagraphs.flatMap((p) => [p, ""]),
  "## Skills",
  "",
  ...skills.map((s) => `- **${s.name}**: ${s.x_description}`),
  "",
  "## Certifications",
  "",
  ...certificates.map((c) => `- [${c.name}](${c.url}) — ${c.issuer}`),
  "",
  "## Articles",
  "",
  `Articles are loaded live from DEV Community: [${devTo.url}](${devTo.url})`,
  "",
  "## Profiles",
  "",
  ...profileLinks,
  "",
];

for (const [file, lines] of [
  ["llms.txt", llms],
  ["llms-full.txt", llmsFull],
]) {
  fs.writeFileSync(path.join(root, "public", file), lines.join("\n"));
  console.log(`Generated public/${file}`);
}
