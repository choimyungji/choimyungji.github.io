---
layout: category
title: 외부에는 readonly 내부적으로는 readwrite 
date: 2022-02-09 23:07:24 +0900
updated: 2022-02-09 23:07:24 +0900
tags : tags
toc: true
public: true
parent: [[swift]]
---
* TOC
{:toc}

클래스의 어떤 property를 내부에서만 설정하고, 외부에서는 getter로만 접근하게 하고 싶을때 
```
private(set) public var prop: String
```