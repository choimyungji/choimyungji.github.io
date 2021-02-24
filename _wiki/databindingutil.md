---
layout: category
title: DataBindingUtil 
date: 2021-02-24 19:41:10 +0900
updated: 2021-02-24 19:41:10 +0900
tags : android, databindingutil 
toc: true
public: true
parent: [[android]]
---
* TOC
{:toc}

Layout의 요소와 클래스의 데이터 바인딩을 도와주는 유틸

## 사용법
### Gradle설정
`build.gradle (:app)'에서
```
    dataBinding {
        enabled = true
    }
```

### layout.xml 변경
기존 생성된 레이아웃을 `<layout></layout>`으로 감싼다.

### Activity
사용할 Activity에도 `binding property`를 추가한다.
```kotlin
class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)
    }
}
```