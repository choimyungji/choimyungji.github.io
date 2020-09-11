---
layout  : category
title   : List와 ForEach 
summary : 
date    : 2020-09-11 23:12:37 +0900 
updated : 2020-09-11 23:12:37 +0900 
tag     : develop, iOS, swiftui
toc     : true
public  : true
parent  : [[swiftui]]
latex   : false
---
* TOC
{:toc}

### ForEach
```Swift
public struct ForEach<Data, ID, Content> where Data : RandomAccessCollection, ID : Hashable {
```
`RandomAccessCollection` 데이터를 순회하면서 읽어온다. 
해당 데이터 콜렉션이 `identifiable`을 준수하면  ID 항목은 생략할 수 있다.

### List
`UIKit`의 테이블뷰와 같은 모양을 구성할때 사용하는 View
```Swift
List {
	Toggle(isOn: $userData.showFavoritesOnly) {
		Text(“Favorites only”)
	}

	ForEach(userData.landmarks) { landmark in
		if !self.userData.showFavoritesOnly || landmark.isFavorite {
			NavigationLink(destination: LandmarkDetail(landmark: landmark)) {
				LandmarkRow(landmark: landmark)
			}
		}
	}
}
```
