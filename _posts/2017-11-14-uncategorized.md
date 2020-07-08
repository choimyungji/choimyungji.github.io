---
layout: post
title: 정리되지 않은
date:   2017-11-14 22:13:58 +0900
categories:
tags : python http android serializable
---

# 정리되지 않은
카테고리를 구분하기 애매하거나 추후정리를 예정하는 학습내용에 대해 순차기록합니다.

## HTTP 메서드 종류
GET		리소스 취득					READ
POST	리소스 생성, 리소스 데이터 추가		CREATE
PUT		리소스 변경					UPDATE
DELETE	리소스 삭제					DELETE
HEAD	리소스의 헤더(메타데이터) 취득
OPTIONS	리소스가 서포트하는 메서드 취득
TRACE	루프백 시험에 사용
CONNECT	프록시 동작의 터널 접속으로 변경


## python 2 에서 3로 달라진 문법
```
import httplib
ImportError: No module named httplib

import http.client

urlparse => urllib.parse

from urllib import urlretrieve
from urllib.request import urlretrieve
```

## android signed apk 업로드가 안될때
```
Upload failed You uploaded an APK with an invalid signature (learn more about signing).
Error from apksigner: ERROR: JAR_SIG_NO_SIGNATURES: No JAR signatures
```
위의 에러 메시지를 띄우며 업로드가 안될때가 있다.
그럴땐 signature v1, v2에 모두 체크후 서명된 apk를 생성한다.

## Serializable 과 transient
### Serializable

데이터를 파일에 쓰거나, 네트워크를 타고 다른 곳에 전송할 때는 데이터를 바이트 단위로 분해하여 순차적으로 보내야 한다. 이것을 직렬화(Serialization)라고 한다.
기본 자료형(boolean, char, byte, short, int ,long, float, double)은 정해진 바이트의 변수이기 때문에 바이트 단위로 분해하여 전송한 후 다시 조립하는데 문제가 없다.
하지만 객체의 크기는 가변적이며, 객체를 구성하는 자료형들의 종류와 수에 따라 객체의 크기는 다양하게 바뀔 수 있다. 이런 객체를 직렬화 하기 위해서 Serializable 인터페이스를 구현하게 된다.

### transient
하지만, 객체의 데이터 중 일부의 데이터는(패스워드와 같은 보안) 여러가지 이유로 전송을 하고 싶지 않을 수 있다. 이러한 변수는 직렬화에서 제외해야 되며, 이를 위해서 변수에 transient를 선언한다.
또한, 직렬화 조건 중 객체의 멤버들 중에 Serializable 인터페이스 구현되지 않은 객체가 있으면, 직렬화 할 수 없다.(NonSerializableException) 직렬화 해야 되는 객체 안의 객체 중 Serializable 인터페이스가 구현되지 않으면서 전송하지 않아도 되는 객체 앞에는 transient 를 선언해준다. 그러면 직렬화 대상에서 제외되므로 해당 객체는 직렬화가 가능해진다.

## intellij 에서 Git branch 항목이 최신화되지 않을때
VCS > Git > Fetch 메뉴로
[link][https://intellij-support.jetbrains.com/hc/en-us/community/posts/206598135-How-can-I-refresh-remote-Git-branches-]

## vim 에서 //를 검색하고 싶다면
```
/\/\/
```

## iOS에서 푸시알림 허용여부 판단
```
func application(_ application: UIApplication, didRegister notificationSettings: UIUserNotificationSettings) {
        if notificationSettings.types.isEmpty {
            print("꺼짐")
        }
        else {
            print("켜짐")
        }
}
```
