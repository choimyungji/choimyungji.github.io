---
layout: category
title: Xcode 플레이그라운드 에러 - Failed to launch process. Failed to attach to stub for playground
date: 2022-01-19 19:40:59 +0900
updated: 2022-01-19 19:40:59 +0900
tags : xcode playground
public: true
parent: [[ios]]
---

Xcode playground에서 빌드가 안되고, 다음과 같은 에러가 뜰때가 있다.
```
Failed to launch process. Failed to attach to stub for playground execution: error: attach failed ((os/kern) invalid argument)
````

Xcode가 로제타로 실행되었을때 발생하는 에러로, 로제타를 끄면 해결됨.
