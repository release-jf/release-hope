#!bin/bash

set -e

remote=origin
branch=main

echo ==============
echo 设置git消息并提交到 ${branch} 仓库
echo

echo -e "\n======> 拉取新代码...\n"

git pull

echo -e "\n======> 查看本地状态...\n"

git status

echo -e "\n======> 添加更改到本地仓库缓存..."

git add -A

echo -e "\n======> 设置提交消息:\n"

pnpm run commit

echo -e "\n======> 提交到远程 ${remote}.${branch} 分支\n"

git push -u $remote $branch

echo
echo ==============
echo commit ok!
echo ==============
