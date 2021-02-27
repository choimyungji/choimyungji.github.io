---
layout: category
title: 모듈 스위프트 버전 에러
date: 2021-02-27 22:17:11 +0900
updated: 2021-02-27 22:17:11 +0900
tags : tags
toc: true
public: true
parent: [[ios]]
---
* TOC
{:toc}
## 개요
모듈을 임포트할때 스위프트 버전이 다르다고 에러가 나는 경우가 있다.
에러 메시지는 다음과 같다.
Module compiled with Swift 5.1 cannot be imported by the Swift 5.1.2 compiler

## 해결방법
프로젝트 파일의 해당 플래그를 YES로 변경
```
BUILD_LIBRARY_FOR_DISTRIBUTION = YES;
```
