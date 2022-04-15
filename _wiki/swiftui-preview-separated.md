---
layout: category
title: swiftui preview가 여러개로 쪼개져서 보일때
date: 2022-04-15 23:23:55 +0900
updated: 2022-04-15 23:23:55 +0900
tags : swiftui
toc: false 
public: true
parent: [[swiftui]]
---

SwiftUI에서 Preview가 한개 화면에 출력되지 않고 여러개로 나뉘어져서 보일때가 있다.
![Spacer](../../img/swiftui-preview-separated/swiftui-preview-separated-01.png)

그것은 `body`아래에 여러개의 엘리먼트가 포함된 것으로 `VStack`으로 감싸주면 해결.