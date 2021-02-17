---
layout: category
title: Github Organization 알림 메일을 별도의 주소로 받기 
date: 2021-02-15 17:03:22 +0900
updated: 2021-02-15 17:03:22 +0900
tags : tags
toc: true
public: true
parent: [[how-to]]
---
* TOC
{:toc}
회사에서 Github Enterprise를 사용하고 있는데, 개인 깃헙 계정에 Organization으로 추가되어 있다.
별다른 설정을 하지 않으면 깃헙의 메인 이메일 주소로 회사 깃헙의 알림들이 오게 된다.

조직의 깃헙 수정사항은 조직의 이메일로 받을수 있도록 수정하자.

## 이메일 추가
오른쪽 상단의 Settings로 들어가면, Emails 란 메뉴링크가 있다.
들어가서 회사 이메일을 추가해준다.
![Email](../../img/github-organization-email/emails.png)

## 조직알림 경로설정
회사 organization과 관련한 알림을 추가한 이메일로 받도록 설정하자.
Emails 메뉴 바로 아래에 Notifications 메뉴를 선택해서 들어가면, 하단에 Custom Routing 항목이 있다.
원하는 조직을 골라 해당 조직관련 알림을 받을 주소를 선택해 준다.

![CustomRouting](../../img/github-organization-email/custom-routing.png)

