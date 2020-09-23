---
layout: wiki
title: sql 명령 정리 
date: 2020-08-26 18:00:00 +0900
updated: 2020-08-26 18:00:00 +0900
categories: macux
parent  : [[how-to]]
public  : true
toc : true
tags : sql 
---
* TOC
{:toc}

## 기본명령
### UPDATE
```
UPDATE 테이블이름
SET 필드이름1=데이터값1, 필드이름2=데이터값2, ...
WHERE 필드이름=데이터값
```


## JOIN
### INNER JOIN
```
SELECT 컬럼1, 컬럼2, ...
FROM 테이블1 t1
INNER JOIN 테이블2 t2
ON t1.컬럼명 = t2.컬럼명;
```

## 집계함수
### count
```
SELECT COUNT(*)
FROM 테이블이름
```
해당 테이블에서 레코드수를 세어 가져온다.

### sum
```
SELECT SUM(필드명)
FROM 테이블이름
```
해당 테이블에서 필드값의 합계를 계산하여 가져온다.

### avg 
```
SELECT AVG(필드명)
FROM 테이블이름
```
해당 테이블에서 필드값의 평균을 계산하여 가져온다.
