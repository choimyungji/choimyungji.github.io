---
layout: wiki
title: Git Command
date: 2020-11-24 20:33:50 +0900
updated: 2020-11-24 20:34:05 +0900
categories: tool
parent  : [[how-to]]
public  : true
toc : true
tags : git init clone add commit push pull
---
* TOC
{:toc}


## init
git 리파지토리를 시작함
```
git init
```

## clone
git 리파지토리로부터 소스코드를 복제하여 가져온다

```
git clone https://github.com/choimyungji/til.git
```

## add
변경된 파일을 인덱스에 추가한다.
```
git add *
git add git.md
```

## commit
인덱스에 추가된 파일을 HEAD에 추가한다.
```
git commit
git commit -m 'message'
```

## push
원격 저장소에 commit한 내용을 확정하여 전달한다.
```
git push
```

## pull
원격저장소에서 변경된 내용을 로컬 리파지토리에 가져온다.
```
git pull
```

## checkout
브랜치를 이동할때나 워킹트리의 파일을 되돌린다.
git version 2.23 이후로 그 의미를 명확하게 하기 위해 `switch`, `restore`로 나누어 졌다.

## remote
원격저장소의 주소를 가져온다.
```
# 브랜치명만 가져옴
git remote
# URL 전체를 가져옴
git remote -v
```

## fetch
원격저장소의 새로운 브랜치 목록을 갱신한다.
```
> git fetch
* [new branch]      newbranch     -> origin/newbranch
```

## 사용자 변경
계정 이름이나 이메일 주소를 변경한다.
```
# 지역
git config user.email choimyungji@gmail.com
git config user.name "Myungji Choi"
# 전역
git config --global user.email choimyungji@gmail.com
git config --global user.name "Myungji Choi"
```

## mv
파일의 이름을 변경한다.
파인더에서 파일을 끌어 옮기거나, sh에서 그냥 mv를 할 경우, 이전의 파일은 delete로, 변경된 파일은 add가 되어, 이력관리가 되지 않는다.
```
git mv previous.md next.md
```

## 되돌리기
stage에 올라가지 않은 수정사항들을 삭제할때
```
git restore .
```
