---
layout: post
title: Command Line Tools for Xcode
date: 2020-02-25 12:00:00 +0900
categories: development
---

macOS의 커맨드라인에서 사용할 수 있는 개발 도구
터미널에서 개발도구를 쓰긴 하는데, Xcode설치는 좀 과하다 생각들면 설치한다.

## 설치
### 설치위치
```
/Library/Developer/CommandLineTools
```

## 명령
### xcode-select
CLI에서 사용하는 CommandLineTools가 어느 경로에 있는지 확인한다.
```
xcode-select -p
```
```
/Applications/Xcode.app/Contents/Developer
```

### xed
터미널에서 Xcode를 실행할 수 있는 명령
```
# 현재 디렉터리의 xcworkspace 또는 xcproj 파일을 실행한다.
# 워크스페이스 파일이 있다면 워크스페이스 먼저 실행한다.
xed .
```
