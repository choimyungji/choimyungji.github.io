---
layout  : category
title   : Kotlin Getter와 Setter
summary : Kotlin getter and setter
date    : 2020-09-23 19:56:26 +0900 
updated : 2020-09-23 19:56:26 +0900 
tag     : develop, android, kotlin, getter, setter
toc     : true
public  : true
parent  : [[kotlin]]
latex   : false
---
* TOC
{:toc}

## 프로퍼티 원형
```
var <propertyName>[: <PropertyType>] [= <property_initializer>]
    [<getter>]
    [<setter>]
```

문자열 타입인 아래의 프로퍼티는 다음과 같이 getter, setter를 구성할 수 있다.
```
var stringRepresentation: String
    get() = this.toString()
    set(value) {
        setDataFromString(value) // parses the string and assigns values to other properties
    }
```