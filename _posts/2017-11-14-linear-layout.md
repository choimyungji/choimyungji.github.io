---
layout: post
title: LinearLayout
date:   2017-11-14 22:13:58 +0900
categories: android
tags : android layout linearlayout 
---

## ScrollView 안에 있는 LinearLayout이 꽉차지 않을때
LinearLayout의 height가 fill_parent인데도 ScrollView를 채우지 않으면
아래의 코드를 ScrollView 에 추가한다.

```
android:fillViewport="true"
```
