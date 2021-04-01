---
layout: category
title: iOS 라이브러리 구조 
date: 2021-04-01 23:10:31 +0900
updated: 2021-04-01 23:10:31 +0900
tags : ios library framework 
toc: true
public: true
parent: [[ios]]
---
* TOC
{:toc}
## 개요
프레임워크가 어떻게 이루어져 있고 각각 어떤 역할을 하는지 정리한다.

## 라이브러리
프레임워크 안에는 프레임워크 이름과 동일한, 그리고 확장자가 없는 파일이 있다.

### file
이 파일은 `file`명령을 통해 그 역할과 아키텍쳐를 확인할 수 있다.
```
> file MyFramework
MyFramework: Mach-O 64-bit dynamically linked shared library arm64
```

위의 MyFramework 파일은 arm64아키텍쳐에서 만들어진 동적링크로 된 공유 라이브러리 라는 것을 알 수 있다.

### nm
`nm`명령으로 안의 심볼들을 확인할 수 있다.

심볼값 심볼타입 이름 순으로 나열된다.

