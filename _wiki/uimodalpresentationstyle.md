---
layout: category
title: UIModalPresentationStyle 
date: 2021-02-17 21:36:39 +0900
updated: 2021-02-17 21:36:39 +0900
tags : ios, UIKit, UIViewController
toc: true
public: true
parent: [[uiviewcontroller]]
---

## UIModalPresentationStyle 
ViewController를 present할때 표시되는 스타일을 설정할 수 있다.

iOS 13에서 해당 스타일의 디폴트가 `.fullScreen`에서 `.automatic`으로 
변경되었다. `.automatic`은 기본적으로 `.pageSheet`인데
이전버전과 동일한 스타일을 취하려면 별도로 `.fullScreen`으로 설정해 주어야 한다.
```
someVC.modalPresentationStyle = UIModalPresentationFullScreen
```

## Enum 
```
case automatic
```
The default presentation style chosen by the system.

```
case none
```
A presentation style that indicates no adaptations should be made.

```
case fullScreen
```
A presentation style in which the presented view covers the screen.

```
case pageSheet
```
A presentation style that partially covers the underlying content.

```
case formSheet
```
A presentation style that displays the content centered in the screen.

```
case currentContext
```
A presentation style where the content is displayed over another view controller’s content.

```
case custom
```
A custom view presentation style that is managed by a custom presentation controller and one or more custom animator objects.

```
case overFullScreen
```
A view presentation style in which the presented view covers the screen.

```
case overCurrentContext
```
A presentation style where the content is displayed over another view controller’s content.

```
case popover
```
A presentation style where the content is displayed in a popover view.

```
case blurOverFullScreen
```
A presentation style that blurs the underlying content before displaying new content in a full-screen presentation.
