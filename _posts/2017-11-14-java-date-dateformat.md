---
layout: post
title:  Java Date, DateFormat
date:   2017-11-14 22:13:58 +0900
categories: java
tags : java string date
---
```java
// 시간포맷 설정
SimpleDateFormat  formatter = new SimpleDateFormat("yyyy-MM-dd");

//현재 날짜를 포맷에따라 문자열로 표기
String todate04 =  formatter.format(new Date());
```
