---
layout: category
title: em과 rem의 차이
date: 2021-03-08 22:50:06 +0900
updated: 2021-03-08 22:50:06 +0900
tags : css, em, rem 
toc: true
public: true
parent: [[etc]]
---
* TOC
{:toc}
## em
상위 엘리먼트 기준의 배수
```
body { 
  font-size: 16px;
}
div {
  font-size: 1.5em; 
}
```
위의 예제코드에서 body 아래에 div 요소가 있는 경우 div의 폰트사이즈는 16 * 1.5 = 24px

## rem
최상위 엘리먼트 기준의 배수
```
html { 
  font-size: 16px;
}
body { 
  font-size: 1.2em;
}
div {
  font-size: 1.5rem; 
}
```
위의 예제코드에서 html > body > div 요소가 있는 경우 div의 폰트사이즈는 16 * 1.5 = 24px
