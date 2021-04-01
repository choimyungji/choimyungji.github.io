---
layout: category
title: 코어데이터를 프레임워크에서 사용하기
date: 2021-03-04 14:33:18 +0900
updated: 2021-03-04 14:33:18 +0900
tags : coredata, framework, ios12,  
toc: true
public: true
parent: [[ios]]
---
* TOC
{:toc}
## TroubleShooting

### 문제
프레임워크 내에 코어데이터를 포함하는 경우, iOS12 이하에서 다음과 같은 에러가 발생할 수 있다.
```
CoreData: annotation:  Failed to load optimized model at path ‘/Users/maeng/Library/Developer/CoreSimulator/Devices/D2D9463D-C33E-4EE1-8B17-98B29CEFD6B0/data/Containers/Bundle/Application/5555D28F-207D-44B1-849C-16C28A06CFE7/appName.app/Frameworks/FrameworkName.framework/UserData.momd/UserData.omo’
```
문제의 코드는 다음과 같다.
```
NSString* momdName = @"UserData";
NSBundle* modelBundle = [NSBundle bundleWithIdentifier:@"PackageName"];
NSURL* url = [modelBundle URLForResource:momdName
                           withExtension:@"momd"];
NSManagedObjectModel* mom = [[NSManagedObjectModel alloc] initWithContentsOfURL:url];
```

### 해결
번들리소스의 `momd` 디렉터리로 읽어주는데, 이전버전에선 mom파일까지 명시해주어야 한다.
해당 `url`에 파일명을 추가해준다.
```
url = [url URLByAppendingPathComponent:@"UserData.mom"];
```

