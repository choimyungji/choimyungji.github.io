---
layout: post
title: 백그라운드에서 위치정보 사용하기
date: 2020-03-09 18:00:00 +0900
categories: development
---

iOS에서 위치정보를 가져오기 위해선 `CoreLocation` 프레임워크를 사용해야 한다.

https://developer.apple.com/documentation/corelocation/

## plist 추가

일단 `Info.plist` 에 권한요청 메시지를 추가한다.

### Key
```
Privacy - Location Always and When In Use Usage Description
```
### Type
```
String
```
### Value
항상허용 권한을 요구할때 사용자에게 보여줄 메시지

---

### Key
```
Privacy - Location When In Use Usage Description
```
### Type
```
String
```
### Value
사용중일때허용 권한을 요구할때 사용자에게 보여줄 메시지

## 백그라운드 기능 추가
Project > Targets의 앱타겟 선택 > Signing & Capabilities 에 보면 `+ Capability` 버튼이 있다. `BackgroundModes`를 추가

![add Capability](./AddCapability.png)

`Background Modes` 에서 `Location updates` 를 켜준다.

![백그라운드기능추가](./BackgroundModes.png)

## 소스코드
모든 위치접근 기능은 `CLLocationManager` 인스턴스에서 시작한다.

```swift
let locationManager = CLLocationManager()

locationManager.desiredAccuracy = kCLLocationAccuracyBest
locationManager.distanceFilter = 50
locationManager.delegate = self
locationManager.requestAlwaysAuthorization()
if #available(iOS 9, *) {
    locationManager.allowsBackgroundLocationUpdates = true
}
```

이제 아래의 함수를 통해 위치정보를 계속 업데이트 한다.
```swift
locationManager.startUpdatingLocation()
```

업데이트된 위치정보를 가져오는 델리게이트 함수는 다음과 같다.
```swift
func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
  guard let lastLocation = locations.last else {
    return
  }

  print(lastLocation.coordinate)
}
```


## 추가사항
앱을 실행해보면 권한을 물어보는데, 항상이란 선택지가 없다.
![최초권한](./permission1.PNG)
앱이 백그라운드로 내려갈 때, 그제서야 묻는다. 항상 허용으로 변경할건지
![백그라운드권한](./permission2.PNG)
