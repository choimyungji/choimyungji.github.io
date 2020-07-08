---
layout: post
title:  지문인식 SDK 사용하기
date:   2017-11-14 22:13:58 +0900
categories: android
tags : android 지문 권한
---

## API level
SDK version 23 (marshmallow)

## 권한
```
<uses-permission android:name="android.permission.USE_FINGERPRINT" />
```

## 동작방식
- Activity.getSystemService 로 FingerprintManager를 가져온다.
- 애플리케이션에서 정한 cipher와 key를 fingerprintManager의 cryptoobject로 설정한다
- 지문인식이 완료되면 위의 cipher에 기반한 암호문을 리턴한다.
- 키는 android keystore에 보관하여 암복호한다.

## 링크
[FingerprintManager](https://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html?hl=ko)
[예제](https://developer.android.com/samples/FingerprintDialog/index.html?hl=ko)
