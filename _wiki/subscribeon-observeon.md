---
layout: category
title: subscribeOn과 observeOn
date: 2022-04-16 23:47:18 +0900
updated: 2022-04-16 23:47:18 +0900
tags : tags
toc: true
public: true
parent: [[rxswift]]
---
* TOC
{:toc}

## subscribeOn()
Observable을 수행할 스케줄러를 지정한다.

## observeOn()
Observer가 이 Observable을 observe할 스케줄러를 지정한다.

두 연산자 모두 스레드를 변경하는 연산자지만,
subscribeOn은 호출시점과 상관없이 시작하는 스케줄러를 지정하고,
observerOn은 해당연산자를 호출하는 시점부터 스케줄러가 반영된다.
