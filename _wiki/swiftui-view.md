---
layout  : category
title   : SwiftUI View
summary : 
date    : 2020-09-11 23:12:37 +0900 
updated : 2020-09-11 23:12:37 +0900 
tag     : develop, iOS, swiftui
toc     : true
public  : true
parent  : [[swiftui]]
latex   : false
---
* TOC
{:toc}

### Text
UIKit의 UILabel과 같은 모양을 구성할때 사용하는 뷰
```
Text("문자열내용")
```

### Spacer
뷰와 뷰사이의 공간을 만들어 줄때 사용한다.
![Spacer](../../img/swiftui-view/spacer.png)
```
VStack {
  Text("Joshua Tree National Park")
	Spacer()
	Text("California")
}
```
위 경우 `Joshua Tree National Park`는 왼쪽 끝에 붙고, `California`는 오른쪽 끝에 붙어 Spacer가 나머지 공간을 차지하게 된다.

### Toggle
UIKit의 Switch와 같은 모양을 구성할 때 사용하는 뷰
```
Toggle(isOn: boolValue) {
  Text(“Favorites only”)
}
```
