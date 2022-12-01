---
layout: category
title: rbenv
date: 2022-12-01 21:49:35 +0900
updated: 2022-12-01 21:49:35 +0900
tags : ruby version rbenv
toc: true
public: true
parent: [[develop]]
---

## rbenv
루비의 여러버전을 설치하고, 각 디렉터리마다 루비버전을 관리해주는 유틸리티

### rbenv 설치
HomeBrew가 설치되어 있다면 brew를 통해 설치하는 것이 가장 쉽고 빠를 것이다.
```
brew install rbenv
```

### ruby 설치
rbenv를 통해 설치가능한 루비버전을 확인한다.
```
rbenv install -l
```

원하는 루비버전을 설치한다.
```
rbenv install 2.7.2
```

### ruby 선택
원하는 버전의 루비를 현재 디렉터리에만 적용하거나, 전역으로 설정할 수 있다.
```
rbenv local 2.7.2
rbenv global 2.7.2
```

## 루비 버전이 변경되지 안을때
rbenv 로 버전을 바꾸어도 시스템 루비에서 변경되지 않는 경우
PATH에 rbenv 경로를 포함해주고, 터미널을 열면서 init을 실행해 준다.
사용하고 있는 터미널 설정파일(`.bash_profile`이나 `.zprofile`에 다음 코드를 추가해 주자.
```
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"
```

