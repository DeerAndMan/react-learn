# 创建时间 2021-07-18
# Git 常用命令 git 的基本使用

## 提交代码之前更新代码
* git branch                        ---查看当前分支
* git pull                          ---更新代码到本地


## 提价代码
* git add <filename>                ---添加文件到本地版本库， `.`代表添加文件夹下所有文件
* git status                        ---查看当前本地文件信息
* git commit -m "更改信息备注"        ---提交文件的备注信息
* git push                          ---提交代码到当前分支


## 第一推送时
* git push -u origin master
## 第一次推送后，直接使用该命令即可推送修改
* git push origin master


1. 查看所有分支 
* git branch -a
2. 查看当前使用分支（结果列表中前面标*号的表示当前使用分支）
* git branch
3. 切换分支
* git checkout 分支名


gitlab                              ---git仓库软件

创建别名：

git status 查看

git add 添加到本地仓库

git commit 提交到本地仓库


git remote -v


``` 临时使用别的源来下载文件
    npm install -g mirror-config-china --registry=http://registry.npm.taobao.org
```