---
layout: post
title: CocoaPods 경고제거
date: 2018-09-11 10:39:58 +0900
categories: iOS
tags : ios cocoapods
---
CocoaPods는 서드파티 라이브러리를 손쉽게 설치, 관리하여 사용할 수 있게하는 일종의 패키지 매니징 툴이다. cocoaPods는 소스를 가져와서 빌드에 포함하기 때문에 빌드타임 에러 -에러는 없겠지- 와 경고를 포함할 수 있다. swiftLint와 같은 툴을 쓰기라도 한다면 경고는 엄청나게 많아지게 된다.
Pods에서 발생하는 경고를 보여주지 않기 위해서는 Podfile에 다음 내용을 포함한다.

```
platform :ios
use_frameworks!
...
# 모든 pod의 경고를 무시합니다.
inhibit_all_warnings!

# 특정 pod의 경고를 무시합니다.
pod 'SwiftLint', :inhibit_warnings => true
```
