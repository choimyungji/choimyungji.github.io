---
layout  : category
title   : Stack
summary : SwiftUI Stack
date    : 2020-09-11 13:50:25 +0900
updated : 2020-09-11 13:50:25 +0900
tag     : develop, iOS, swiftui
toc     : true
public  : true
parent  : [[swiftui]]
latex   : false
---
* TOC
{:toc}

### HStack
View를 수평으로 스택에 쌓는다. (Horizontal)
```
HStack {
	Text(“Hello, World!”)
	Text(“Hello, World!”)
	Text(“Hello, World!”)
}
```
![HStack](../../img/swiftui-stack/hstack.png)

### VSTack
View를 수직으로 스택에 쌓는다. (Vertical)
```
VStack {
	Text(“Hello, World!”)
	Text(“Hello, World!”)
	Text(“Hello, World!”)
}
```
![VStack](../../img/swiftui-stack/vstack.png)