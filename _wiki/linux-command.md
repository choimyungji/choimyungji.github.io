---
layout: wiki
title: 리눅스 명령 정리 
date: 2020-09-06 11:50:00 +0900
updated: 2020-09-06 11:50:00 +0900
categories: linux 
parent  : [[how-to]]
public  : true
toc : true
tags : linux, bash, zsh 
---
* TOC
{:toc}

## 기본명령
### bg 
백그라운드 프로세스 목록을 조회한다.  
현재 포어그라운드 프로세스에서 `ctrl+z` 누른뒤 `bg` 누르면 백그라운드 프로세스 목록에 들어가 있는 것을 확인할 수 있다.
`ctrl+z` 는 현재 프로세스를 일시 중지 시키는 기능이다.

### fg
```
> fg [jobid]
```
백그라운드 프로세스를 다시 포어그라운드로 불러낸다.

### alias
```
> alias 단축명령어='명령어'
ex)
> alias bejs='bundle exec jekyll serve'
```
명령어를 짧게 축약해서 입력할 수 있도록 정의한다. 보통 profile에 포함하여 터미널이 열릴때부터 동작하도록 한다.


