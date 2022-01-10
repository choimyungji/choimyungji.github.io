---
layout: category
title: SwiftUI Textfield 
date: 2022-01-11 00:15:29 +0900
updated: 2022-01-11 00:15:29 +0900
tags : tags
toc: true
public: true
parent: [[swiftui]]
---
* TOC
{:toc}

## TextField
`UIKit`의 `UITextField`를 대체하는 뷰

```swift
struct ContentView: View {
  @State private var name: String = "Myungji Choi"

  var body: some View {
    TextField("플레이스 홀더가 들어갑니다.", text: $name)
  }
}
```
구조체 내에 `@state`로 선언한 `name` 변수에 물려있는데, 사용자의 입력이 바로 해당 변수에 반영된다.

