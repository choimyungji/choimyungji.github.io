---
layout: post
title: GatsbyJS에서 Noto Serif KR 사용하기
date: 2020-02-26 00:00:00 +0900
categories: development
description: 블로그에 예쁜 글꼴을 사용하기 위한 삽질기
---
## 글꼴 바꾸기
블로그를 `GatsbyJS`로 개편하기로 마음을 먹고, 이번기회에 함께 해보려고 한 것은 글꼴 바꾸기였다.
텍스트를 명조 계열로 보이고 싶었다. 예쁘고 읽기 좋은 글꼴을 사용해서, 블로그를 마치 책을 읽는 것처럼 가독성 좋게 하고 싶었다.

## 글꼴 후보
흔히 명조체라고 얘기하는 글꼴은 윈도우에선 바탕체라고도 하는데, 가로와 세로획의 굵기가 다르고 획의 끝에 장식이 되어 있는 글꼴이다. 물론 역사는 다르겠지만 영문 글꼴의 Serif와 유사한 형태다. 해상도가 낮은 시절엔 고딕이나 굴림체가 훨씬 깔끔하게 보인다. 하지만 요즘 시대엔 레티나이상의 해상도가 휴대폰이며 데스크탑이며 많이 나오니까, 개인의 취향에 따라 써볼만한것 같다.

물론 명조체라고 다 예쁘고 가독성이 좋은 것은 아니어서, 여러 글꼴들을 놓고 고민을 좀 했다. 결국엔 최종적으로 두개의 후보를 뽑았다.

### Noto Serif KR
`Noto Serif KR`은 구글과 어도비가 합작하여 만든 폰트라 들었다. `Noto Sans`는 고딕계열, `Noto Serif`는 명조 계열. 글꼴이 유려하고, 적용하기 쉽다고 한다.


###KoPub바탕
KoPub바탕은 원래 출판쪽에서 그 역사가 시작된 폰트라고 한다. 리디북스에서 eBook을 읽을때도 이 글꼴이 제일 가독성이 좋은 것 같다.

둘다 예쁜 글꼴이지만, `Noto Serif KR`이 더 적용하기 쉬울것 같은 예감이 들었다. 전혀 근거는 없다.

## Gatsby에 폰트적용
GatsbyJS로 만든 웹페이지에 Noto Serif KR을 적용하는 방법 두가지를 찾았다.

### typefaces
typefaces 는 글꼴을 담고있는 NPM 패키지다.

https://github.com/KyleAMathews/typefaces

원하는 글꼴의 typeface 패키지를 찾아 package.json에 추가한다.
```
  "dependencies": {
    "typeface-merriweather": "0.0.72",
    "typeface-montserrat": "0.0.75",
  }
```
그리고  `gatsby-browser.js` 에 `import`해준다.
```
import "typeface-montserrat"
import "typeface-merriweather"
```

Noto Serif KR도 찾아보니 있었다. 역시 구글에서 밀어주는 글꼴이다 보니 유명해서 그런가, 지원을 해주네.
그러나 Noto Serif KR을 받아 빌드해보니, 영문에만 Serif 글꼴이 적용되고 한글에는 OS기본 글꼴인 애플 SD 산돌고딕 NEO가 나오는 것이었다.

`node_modules`를 까서 열어봤다. 웹폰트 파일들이 있는데, 그 파일들에 `_latin`이란 꼬릿말이 붙어있었다. 글꼴 이름은 KR인데 그중에서 영문폰트만 가져온건가.. 뭐지 싶었다.

### gatsby-plugin-google-fonts
`gatsby-plugin-google-fonts`는 gatsby에서 구글 폰트를 쓸수 있게 하는 플러그인이다.
```
  "dependencies": {
    "gatsby-plugin-google-fonts": "1.0.1",
  }
```
package.json에 추가해 주고,
src/utils/typography.js에
```
googleFonts: [
  {
    name: "Noto Serif KR",
    styles: ["400","700"],
  },
  {
    name: "Noto Sans KR",
    styles: ["400","700"]
  }
],
```
를 추가한다.

이때부터 `Noto Serif KR` 글꼴 사용 가능
