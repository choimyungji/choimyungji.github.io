---
layout: wiki 
title: git submodule
date: 2020-11-27 15:58:33 +0900
updated: 2020-11-27 15:58:33 +0900
categories: git 
parent  : [[git]]
public  : true
toc : true
tags : git, submodule 
---
* TOC
{:toc}

git 저장소 안에 다른 git  리파지토리를 포함시키 별도의 모듈로 구성할 수 있다.


```
git submodule add URL
```
현재 디렉토리에 다른 저장소를 추가한다.

```
git submodule init
```
.gitmodule 파일을 기반으로 로컬설정 파일이 준비된다.

```
git submodule update
```
리모트 저장소에서 데이터를 가져온다.







