---
layout  : category
title   : GPX
summary : 
date    : 2020-09-11 18:53:44 +0900
updated : 2020-09-11 18:53:44 +0900
tag     : develop, iOS, corelocation
toc     : true
public  : true
parent  : [[core-location]]
latex   : false
---
* TOC
{:toc}

GPX는 Xcode에서 위치정보를 시뮬레이션 하기 위해 사용하는 파일이다.
형식은 XML 로 되어 있으며 구조는 다음과 같다.
아래 파일은 [gpxgenerator.com](https://gpxgenerator.com) 에서 자동생성해준 gpx 파일이다.

```xml
<?xml version="1.0"?>
<gpx version="1.1" creator="gpxgenerator.com">
<wpt lat="37.402468" lon="127.225786">
    <ele>73.65</ele>
    <time>2020-09-11T10:43:41Z</time>
</wpt>
</gpx>
```

위 형식에 `lat`과 `lon`만 채워 넣으면 기기와 시뮬레이터에서 위치를 시뮬레이션 할 수 있다.
