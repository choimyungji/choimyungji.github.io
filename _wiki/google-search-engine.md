---
layout  : wiki
title   : 구글 검색 엔진
summary :
date    : 2020-07-13 14:40:00 +0900
updated : 2020-07-13 14:40:00 +0900
tag     : google, gse 
toc     : true
public  : true
parent  : [[how-to]]
latex   : false 
---

## Google Custom Engine
https://cse.google.com/cse/create/new

나의 블로그 주소를 입력하고 만들기 버튼을 누르면 생성이 완료된다.

사이트에 추가하기를 하면 아래의 코드를 얻을 수 있다.
```
<script async src="https://cse.google.com/cse.js?cx=010903221190266913573:xjqzsvrfjr0"></script>
<div class="gcse-search"></div>
```

`ces.js?cx=` 뒤에 붙은 코드는 이 커스텀엔진의 아이디와 같은 역할을 하게 된다.
