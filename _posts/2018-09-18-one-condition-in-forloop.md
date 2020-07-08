---
layout: post
title: for 문 안에 조건이 한개라면
date: 2018-09-18 23:25:00 +0900
categories: iOS
tags : swift for if
---

아래와 같은 코드가 있다. paramArray를 순회하면서 원하는 조건을 만족하면 특정한 함수를 호출한다. 이는 두개의 블록을 중첩한다.

```swift
for param in paramArray {
	if param == "whatwewant" {
		doSomething(param)
	}
}
```

위의 코드는 아래와 같이 줄여서 쓸 수 있다.
```swift
for param in paramArray where param == "whatwewant" {
	doSomething(param)
}
```
