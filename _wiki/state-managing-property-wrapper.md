---
layout  : category
title   : 상태관리 프로퍼티 래퍼
summary : SwiftUI에서 상태관리를 위한 PropertyWrapper
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

### @State 
관리하는 값을 읽고 쓸 수있는 PropertyWrapper type
SwiftUI는 State로 선언한 모든 프로퍼티의 저장을 관리
State값이 변경되면 뷰는 Appearance을 무효화하고 본문을 다시 계산

### @EnvironmentObject
부모 또는 상위 뷰에서 제공하는 Observable한 객체에 대한 PropertyWrapper 유형
Observable 객체가 변경 될 때마다 현재 뷰를 무효화. 
속성을 EnvironmentObject 로 선언하는 경우 해당 [environmentObject(_:)](https://developer.apple.com/documentation/swiftui/view/) 수정자를 호출하여 상위 뷰에서 해당 모델 객체를 설정해야 함.

### @ObservedObject
Observable한 객체를 구독하고 Observable한 객체가 변경 될 때마다 뷰를 무효화하는 PropertyWrapper 유형