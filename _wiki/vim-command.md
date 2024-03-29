---
layout: wiki
title: VIM 명령 정리 
date: 2017-11-15 23:00:00 +0900
updated: 2022-07-12 23:40:00 +0900
categories: macux
parent  : [[vim]]
public  : true
toc : true
tags : vim
---
* TOC
{:toc}

## 기본명령
### 1. 저장 / 종료
``` 
:wq (저장하고 닫기)
:q! (저장하지 않고 닫기)
i   Insert mode
R   Replace mode
```

### 2. 이동
#### 2.1 커서이동
```
k	커서를 위로 이동
j	커서를 아래로 이동
h	커서를 왼쪽으로 이동
l	커서를 오른쪽으로 이동

0	커서를 줄의 처음으로 이동
$	커서를 줄의 마지막으로 이동
^	커서를 줄의 첫 글자로 이동 (공백문자 제외)
-	커서를 윗줄 맨 처음으로 이동

w	커서를 다음 단어의 첫글자로 이동
b	커서를 이전 단어의 첫글자로 이동
e	커서를 다음 단어의 끝글자로 이동

1g	커서를 문서의 맨 처음으로 이동
15g	커서를 문서의 15라인째로 이동
G	커서를 문서의 마지막으로 이동

{	커서를 이전의 빈줄이 있는 곳으로 이동
}	커서를 다음번 빈줄이 있는 곳으로 이동

*	현재커서가 위치한 단어를 뒤에서 찾음
#	현재커서가 위치한 단어를 앞에서 찾음
```

#### 2.2 화면이동
```
^F	한화면 뒤로 이동
^B	한화면 이전으로 이동
```

### 3. 편집
``` 
J	아랫줄의 내용을 현재줄에 붙임
```
#### 3.1 탭
```
<<	커서가 있는 줄의 맨 앞 탭하나 제거
>>	커서가 있는 줄의 맨 앞 탭하나 추가
```

#### 3.2 대소문자

```
~ (물결무늬,Tilde)	현재커서의 글자의 대소문자를 반전
U	선택영역의 모든 알파벳을 대문자로 변경
u	선택영역의 모든 알파벳을 소문자로 변경
gUU	커서가 있는 줄의 모든 알파벳을 대문자로 변경
guu	커서가 있는 줄의 모든 알파벳을 소문자로 변경
```
#### 3.3 삭제
daw 현재커서가 포함하는 단어를 삭제
dap 현재 커서가 포함하는 문단을 삭제

#### 3.4 숫자
<C-a> 현재 커서의 숫자 +1
<C-x> 현재 커서의 숫자 -1

### 4. 검색
```
/key	key라는 단어를 검색한다.
/\ckey	key라는 단어를 대소문자 구분없이 검색한다.
n	다음 단어를 검색한다.
N	이전 단어를 검색한다.
f<c>	현재커서 다음으로 나오는 <c> 문자로 이동
; 	반복 이동
,	되돌리기
```

### 5. 치환
```
:시작줄,끝줄s/찾을패턴/바꿀문자열/옵션
```
#### 5.1 옵션
`g` 모든 패턴을 모두 변경, 지정하지 않으면 처음 한번만 치환
`i` 대소문자 구분을 하지 않음
`c` 바꿀때마다 사용자에게 물어봄



#### 5.2 범위
시작줄 끝줄은 행번호를 사용한다.

`.` 현재 커서
`$` 마지막줄

### 비주얼 모드
`v` 비주얼 모드
`V` 줄단위 비주얼 모드
`y` yank - 복사하기
`p` 붙여넣기
`viw` 현재커서를 선택
