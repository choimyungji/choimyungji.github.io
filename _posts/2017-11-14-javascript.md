---
layout: post
title: javascript 
date:   2017-11-14 22:13:58 +0900
categories: web
tags : url foreach json 
---

# URL 호출

## 간단예제
```
function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
```

## 상세예제
```
var xmlHttp = null;

function GetCustomerInfo()
{
    var CustomerNumber = document.getElementById( "TextBoxCustomerNumber" ).value;
    var Url = "GetCustomerInfoAsJson.aspx?number=" + CustomerNumber;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = ProcessRequest;
    xmlHttp.open( "GET", Url, true );
    xmlHttp.send( null );
}

function ProcessRequest()
{
    if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 )
    {
        if ( xmlHttp.responseText == "Not found" )
        {
            document.getElementById( "TextBoxCustomerName"    ).value = "Not found";
            document.getElementById( "TextBoxCustomerAddress" ).value = "";
        }
        else
        {
            var info = eval ( "(" + xmlHttp.responseText + ")" );

            // No parsing necessary with JSON!        
            document.getElementById( "TextBoxCustomerName"    ).value = info.jsonData[ 0 ].cmname;
            document.getElementById( "TextBoxCustomerAddress" ).value = info.jsonData[ 0 ].cmaddr1;
        }                    
    }
}
```

# 구문
## forEach 메서드 (Array)
### 설명
Array의 요소에 대하여 반복문을 실행한다.
```
array.forEach(callbackfn);
```
### 예제
```
numbers.forEach(
    function addNumber(value) { sum += value; }
);
```

## Date 에서 날짜만 사용하고 싶을때
```
date1 = new Date()
date1.setHours(0,0,0,0)
```

## add json key
```
var json = {NAME: "John", AGE: 30, SEX: "male"};

//add item (key, value)
json.BIRTHDAY = '2001-03-01';
//delete item (key)
delete json.SEX;
```

## scroll document position
```
window.scrollTo(xpos, ypos)
```
