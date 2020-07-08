---
layout: post
title: 나의 맥 기본 세팅
date: 2020-02-22 00:12:00 +0900
categories: setting
---
회사에서 새 맥을 지급받거나, 쓰던 맥이 뭔가 무거워지거나 의외로 맥을 초기화하는 일이 꽤 자주 생긴다.
설치할 것도 많고, 설정할 것도 많다. 이번에 좀 정리를 해두고 다른 분들에게도 참고가 되면 좋겠다.

## 앱 설치

### Alfred
새로 설치해도 설정이나 워크플로 등을 동일하게 유지하기 위해, iCloud drive 에 싱크를 걸어준다.
```
Syncing : iCloud drive/AlfredApp
```

### Xcode

### Android Studio

* IdeaVim Plugin 설치
* 위아래 버튼  Ctrl+J, Ctrl+K 로 키 매핑
* Ctrl+D,Ctrl+R이 Vim 대신 IDE 설정을 따르도록 수정

### iTerm2

### Atom
* Vim plugin

### Bear
### Drafts
### Magnet

## 터미널 설정
### Homebrew
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
확인

```sh
$ brew doctor
Your system is ready to brew.
```
### git
최신버전 설치
```
brew install git git-lfs
```

### zsh
```sh
brew install zsh zsh-completions
// zsh을 기본 셸로 사용
$ chsh -s `which zsh`  
```
* `chsh: /usr/local/bin/zsh: non-standard shell` 오류 발생할 경우

```
sudo vim /etc/shells
```
맨 아래에 `which zsh`했을때의 결과를 추가 후 저장
oh-my-zsh
```
$ curl -L https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh | sh
```
zshrc
theme = avit

### CocoaPods
```sh
sudo gem install cocoapods
```

### Yarn
```sh
> brew install yarn
```

## 파인더 설정
1. 사이드바에 홈폴더 꺼내기
2. 새 파인더를 열때 기본폴더를 홈폴더로 변경
3. 스크린샷 저장위치를 데스크탑에서 다른 곳으로 변경
```sh
> defaults write com.apple.screencapture location ~/Pictures/ScreenShots
> killall SystemUIServer
```

## 키보드 설정
1. Ctrl space 를 한/영 전환으로 사용하는 단축키 제외
2. 텍스트 : 맞춤법자동수정 해제, 자동으로 문장을 대문자로 시작 해제
3. 키보드 탐색을 사용하여 컨트롤 간에 초점 이동
