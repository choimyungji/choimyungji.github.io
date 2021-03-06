---
layout: post
title: 나의 블로그를 프라이빗 리포지토리에서 머지하기
date: 2021-02-16 22:06:27 +0900
categories : git
tags : private, blog, fork, merge 
---

## Private GitHub Page
이 블로그,위키는 GitHub Page에 구성되어 있고, 기본적으로 소스코드와 함께 콘텐츠도 전부 공개되어 있다.
그러나 블로그가 공개의 목적과 더불어, 개인의 기록으로 사용하다 보니 비공개 포스트를 작성할때도 있고, 작성중인 포스트는 비공개 영역에 두었다가 원하는 시점에 공유할 수도 있다.
물론 로컬 리포지토리에 데이터를 기록해 두고, 필요한 시점에 올릴수도 있다. 그래도 클라우드 상에 올려두었다가 다른 곳에다가 가져오고 싶을수도 있을 것.
그래서 떠울린 방법은 이렇다. 
1. 나의 github.io repo를 private으로 fork한다.
2. fork한 레포에서 포스트를 작성한다.
3. 원래의 github.io repo로 머지한다.

## 나의 리포지토리를 Fork하기
그런데 Github에서 나의 리포지토리에 가보면 포크 버튼이 없다.
그래서 구글링 해보니, 요령은 이렇다.
1. 포크대상이 되는 빈 리포지토리를 만든다.
2. 로컬에 대상 리포지토리를 클론한다.
3. 포크할 원본 리포지토리를 Upstream Remote로 add 한다.
4. Upstream의 master 브랜치를 pull 한다.
5. Origin의 master 브랜치로 push 한다.

엄밀히는 포크는 아니고, 공개 리포지토리를 추가 remote 브랜치로 사용하는 개념인 것 같다.

이제 private 블로그를 로컬에서 메인으로 사용하고 공개할 코드만 공개 리포지토리로 푸시해서 사용해보자.

