---
layout: post
title:  "UIView animation"
date:   2018-07-19 16:38:58 +0900
categories: swift
tags : swift UIView animate animation
---
## UIView의 애니메이션

### UIView.animate(withDuration:TimeInterval, animations:() -> Void)
* withDuration : 지속시간
* animations : 애니메이션 완료시점의 상태를 정의하는 클로저

```swift
// 1.0초에 걸쳐 img의 alpha 값을 1.0으로 변경
UIView.animate(withDuration: 1.0, animations: {
    self.img.alpha = 1.0
})
```

### UIView.animate(withDuration:TimeInterval, animations:() -> Void, completion: ((Bool) -> Void)?)
* withDuration : 지속시간
* animations : 애니메이션 완료시점의 상태를 정의하는 클로저
* completion : 완료시 호출할 클로저

```swift
// 1.0초에 걸쳐 img의 alpha 값을 0.0으로 변경한 뒤 부모뷰로부터 삭제
UIView.animate(withDuration: 1.0, animations: {
    self.img.alpha = 0.0
},
{(value : Bool) in
    self.img.removeFromSuperview()
})
```

### UIView.animateKeyframes()
여러개의 애니메이션 프레임을 추가하여 연속적으로 움직이도록 함
```swift
UIView.animateKeyframes(withDuration: 0.5, delay: 0, options: .calculationModeCubic, animations: {
UIView.addKeyframe(withRelativeStartTime: 0, relativeDuration: 1.0/5.0, animations: {
    self.imgView.center.x += 6
})
UIView.addKeyframe(withRelativeStartTime: 1.0/5.0, relativeDuration: 1.0/5.0, animations: {
    self.imgView.center.x -= 12
})
UIView.addKeyframe(withRelativeStartTime: 2.0/5.0, relativeDuration: 1.0/5.0, animations: {
    self.imgView.center.x += 12
})
UIView.addKeyframe(withRelativeStartTime: 3.0/5.0, relativeDuration: 1.0/5.0, animations: {
    self.imgView.center.x -= 12
})
UIView.addKeyframe(withRelativeStartTime: 4.0/5.0, relativeDuration: 1.0/5.0, animations: {
    self.imgView.center.x += 6
})

}, completion:nil)
```
