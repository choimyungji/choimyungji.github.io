---
layout: category
title: Main Thread Checker
date: 2021-03-03 18:03:18 +0900
updated: 2021-03-03 18:03:18 +0900
tags : debug, runtime, thread, 
toc: true
public: true
parent: [[ios]]
---
* TOC
{:toc}
UI와 관련한 코드는 Main Thread에서 불려야 한다.
그 외의 thread에서 UI와 관련된 기능을 호출하는지 확인할 수 있도록
Main Thread Checker라는 기능이 있다.

Edit Scheme... 의 Run 또는 Test 항목의 Diagnostics 탭에서

Main Thread Checker에 체크
![mainthreadchecker](../../img/mainthreadchecker/mainthreadchecker.png)
