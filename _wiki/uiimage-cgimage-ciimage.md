---
layout: category
title: UIImage vs CGImage vs CIImage
date: 2021-05-16 21:41:12 +0900
updated: 2021-05-16 21:41:12 +0900
tags : uiimage, cgimage, ciimage, uikit
toc: true
public: true
parent: [[uikit]]
---
* TOC
{:toc}
카메라 입력으로 받은 이미지를 연산하거나, 변형하거나, 다른 모듈에 보낼때 Bitmap으로 변환하는 경우가 있는데,
예제 코드들을 인터넷에서 찾아보니 CGImage로 갔다가 CIImage로 갔다가 왔다갔다 하더라.
각각 어떻게 다르고 어떻게 사용하는지 정리해보자.

## UIImage
앱상에서 이미지 데이터를 관리하는 객체  
UIKit안에 포함되어 있다.

## CGImage
비트맵 이미지 또는 이미지 마스크  
Core Graphics 안에 포함되어 있다.

## CIImage 
Core Image 필터에 의해 처리되거나 생성될 이미지의 표현  
Core Image 안에 포함되어 있다.
