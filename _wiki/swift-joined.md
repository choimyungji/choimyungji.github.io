---
layout: category
title: joined
date: 2021-08-25 23:38:24 +0900
updated: 2021-08-25 23:38:24 +0900
tags : tags
toc: true
public: true
parent: [[swift]]
---
* TOC
{:toc}

## 설명
`String` 배열의 요소들을 연결하여 하나의 String을 구성할 때 사용한다.

## 용법
```swift
let alphabets = ["A", "B", "C"]
print(alphabets.joined(", "))

A, B, C
```

## 장점
사이에 콤마라든지, 탭이라든지, 구분자 등의 separator를 포함할 수 있는데,
`foreach`, `reduce` 등의 방법은 맨 마지막에도 해당 문자열이 달라 붙는 단점이 있다.
.joined를 사용하면 element 사이에만 구분자를 깔끔하게 넣을 수 있다.