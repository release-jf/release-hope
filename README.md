# release-hope

使用vuepress-theme-hope主题的提交机制

提交步骤：
- pnpm run commit 设置git消息
- pnpm run release 生成changelog，提交并生成版本

```shell

"release": "pnpm release:bump && pnpm release:publish",

"release:bump": "bumpp -r --execute=\"pnpm commit-and-tag-version && git add CHANGELOG.md\" --commit \"chore(release): publish v%s\" --all --tag --push",

"release:publish": "cross-env NODE_OPTIONS=\"--experimental-json-modules\" tsx scripts/release.ts"

 ```
