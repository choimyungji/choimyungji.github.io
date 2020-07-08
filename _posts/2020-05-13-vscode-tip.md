---
layout: post
title: vs code 사용 팁
date: 2020-05-13 17:00:00 +0900
categories: tool 
---

## 스니펫 작성

```
Menu > Code > Prefernces > User Snippets
```

에서 파일별, 프로젝트별 또는 글로벌로 스니펫을 추가할 수 있다.
그 형식은 다음과 같다.

```json
{
	"Generate Metadata": {
		"prefix": "mdm",
		"body": [
			"---",
			"layout: post",
			"title: ${1:title}",
			"date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND +0900",
			"categories: ${2:categories}",
			"tags : ${3:tags}",
			"---",
		],
		"description": "Generate Metadata"
	}
}
```

`editor.tabCompletion` 를 `on` 또는 `only snippets` 로 선택시 `mdm + tab` 을 누르면 body안의 내용이 자동 입력된다.
변경대상이 되는 영역은 `${1:블록이름}` 으로 정하면 수정할수 있고
현재시간등은 [링크](https://code.visualstudio.com/docs/editor/userdefinedsnippets) 에서 확인가능