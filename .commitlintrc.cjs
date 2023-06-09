/** const fs = require("node:fs");
const path = require("path");
const { execSync } = require("child_process");

const packages = fs.readdirSync(path.resolve(__dirname, "packages"));

const scopeComplete = execSync("git status --porcelain || true")
  .toString()
  .trim()
  .split("\n")
  .find((r) => ~r.indexOf("M  packages"))
  ?.replace(/\//g, "%%")
  ?.match(/packages%%((\w|-)*)/)?.[1];
*/

/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["docs","test","demo", "release",]],
  },
  prompt: {
   /** defaultScope: scopeComplete,
    customScopesAlign: !scopeComplete ? "top" : "bottom", */
    allowCustomIssuePrefix: false,
    allowEmptyIssuePrefix: false,
  },
};






















