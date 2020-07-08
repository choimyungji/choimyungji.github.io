---
layout: post
title: CommandLineTools 사용 팁
date: 2020-02-25 12:00:00 +0900
categories: development
description: CommandLineTools 사용중 발생하는 오류상황과 그 해결책에 대해 정리한다.
---

CommandLineTools 사용중 발생하는 오류상황과 그 해결책에 대해 정리한다.

### Xcode와의 충돌
```sh
> xed .
xcode-select: error: tool 'xed' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance
```
CLI에서 Xcode 프로젝트를 실행하려고 할때 종종 발생하는 오류, Xcode를 설치하고 난 이후에 CommandLineTools의 경로가 바뀌지 않아서 발생
```sh
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```
