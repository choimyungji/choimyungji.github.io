---
layout: post
title:  "Auto Reference Counting"
date:   2018-07-11 16:38:58 +0900
categories: swift
tags : swift arc reference referencecount weak strong unowned
---
# Reference

## RC(Reference Counting)
메모리를 사용한 후 해제하기 위한 방법으로 객체가 참조된 횟수를 확인하여 count가 0이 되면 메모리를 해제 하는 방식
retain을 통해 count++ 해주고, release를 통해 count--를 하는 예전의 방식을 수동이란 의미를 붙여 MRC라 부르기도 했다고

## ARC (Auto Reference Counting)
레퍼런스 카운팅을 하는 retain/release를 컴파일러가 자동으로 추가해주는 기술
iOS 5시절 컴파일러가 LLVM으로 변경되면서 objective-c 에 도입되고 swift에서도 동일한 기술이 적용됨

## 순환참조
객체A가 객체B를 참조하고, 객체B가 객체A를 참조할 경우 순환참조가 발생한다.
이 경우 해당객체를 지워도 ReferenceCount는 줄어들지 않고 메모리 누수의 원인이 된다.
이에 참조를 강한 참조와 약한 참조로 구분하여 사용한다.

### strong
**강한참조**
별도의 지시자를 사용하지 않을경우 기본값
해당객체를 참조/참조해제할때 count를 증가/감소함

### weak
**약한참조**
ReferenceCount를 증가 또는 감소하지 않음
메모리에서 해제시 해당변수를 nil로 설정
(그래서 weak는 optional로 설정할 수 밖에 없음)

### unowned
**미소유참조**
ReferenceCount를 증가 또는 감소하지 않음
메모리에서 해제시 weak와 달리 해당변수를 nil로 바꾸지 않음
