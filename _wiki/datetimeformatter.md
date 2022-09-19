---
layout: category
title: DateTimeFormatter
date: 2022-09-19 21:05:44 +0900
updated: 2022-09-19 21:05:44 +0900
tags : tags
toc: true
public: true
parent: [[swift]]
---

`swift`에서 날짜, 시간을 다루는 방법

## Date
날짜 클래스
```swift
let now = Date()
```

## DateTimeFormatter
Date클래스를 원하는 모양으로 표현하는 형식을 지정한다.

```swift
let dateFormatter = DateFormatter()
dateFormatter.dateFormat = "yyyy-MM-dd"
return dateFormatter.string(from: date)
```

표현하는 형식은 [날짜 시간 표현 형식 문자열](/wiki/date-format) 참고

