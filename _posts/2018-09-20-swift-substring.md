---
layout: post
title: swift String의 substring 쉽게 쓰기
date: 2018-09-20 22:35:00 +0900
categories: swift
tags : swift string substring extension
---

swift의 String에서 substring을 쓸 때는 Int형을 인덱스로 사용하는게 아니고 String.Index 타입으로 되어 있다. 난 그냥 몇번 글자부터 몇번 글자까지 짜르고 싶은데... String 타입의 extension을 만들어보자.

```swift
func substring(from: Int, to: Int) -> String? {
    guard count > from && count > to && from < to else {
        return nil
    }
    let index1 = self.index(self.startIndex, offsetBy: from)
    let index2 = self.index(self.startIndex, offsetBy: to)
    return String(self[index1...index2])
}

func substring(from: Int, length: Int) -> String? {
    guard count > from && count > from+length else {
        return nil
    }
    let index1 = self.index(self.startIndex, offsetBy: from)
    let index2 = self.index(self.startIndex, offsetBy: from+length)
    return String(self[index1..<index2])
}

func substring(from: Int) -> String? {
    guard count > from else {
        return nil
    }
    let index = self.index(self.startIndex, offsetBy: from)
    return String(self[index...])
}

func substring(to: Int) -> String? {
    guard count > to else {
        return nil
    }
    let index = self.index(self.startIndex, offsetBy: to)
    return String(self[...index])
}
```
