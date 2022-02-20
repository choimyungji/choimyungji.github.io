---
layout: category
title: iOS 런루프 
date: 2022-02-20 17:27:13 +0900
updated: 2022-02-20 17:27:13 +0900
tags : ios uikit runloop cycle
toc: true
public: true
parent: [[uikit]]
---
* TOC
{:toc}
## Main Event Loop
main run loop에서 앱은 들어오는 이벤트를 객체에 지속적으로 라우팅하고, 모양과 상태를 업데이트한다.


## layoutSubviews
view와 subview의 위치와 크기를 재조정한다. 직접호출하여 사용하지 않는다.

### Automatic refresh trigger
resize view
add subview
UIScrollView를 스크롤할 때, UIScrollView와 부모뷰의 layoutSubviews가 호출
device 회전
View의 constraint 변경

### setNeedsLayout
시스템에게 이 view의 layout이 다시 계산되어야 한다고 알려줌.

### layoutIfNeeded
view의 레이아웃이 재조정되어야 하면, setNeedsLayout을 즉시 호출한다.

## Display
View의 display는 색상, 텍스트, 이미지 및 Core Graphics 그리기를 포함하여 view 및 subview의 크기 조정 및 위치 지정을 포함하지 않는 보기의 속성을 포함. Display 과정은 업데이트를 트리거하기 위한 레이아웃 패스와 유사한 메서드가 포함됨 변경 사항이 감지될 때 시스템에서 호출하는 메서드와 새로 고침을 트리거하기 위해 수동으로 호출할 수 있는 메서드가 있음.

### draw
view를 다시 그려준다. layout의 layoutSubviews에 해당하는 역할. draw도 직접 사용하지 않는다.

### setNeedsDisplay()
setNeedsLayout과 유사. 다음 update cycle에 draw를 호출해서 다시 그려준다.

## 참조
https://developer.apple.com/library/archive/documentation/General/Conceptual/Devpedia-CocoaApp/MainEventLoop.html
https://tech.gc.com/demystifying-ios-layout/