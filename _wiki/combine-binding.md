---
layout: category
title: 컴바인 데이터 바인딩
date: 2022-09-18 23:23:41 +0900
updated: 2022-09-18 23:23:41 +0900
tags : combine 
toc: true
public: true
parent: [[swift]]
---

## Subject

### PassthroughSubject

```swift
var name = PassthroughSubject<String, Never>()
subject.send("명지")
```

```swift
private var bag = Set<AnyCancellable>()

name.sink { result in
    print(result)
}.store(in: &bag)
```

