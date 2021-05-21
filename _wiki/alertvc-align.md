---
layout: category
title: UIAlertController의 text를 왼쪽정렬하기
date: 2021-05-21 22:17:06 +0900
updated: 2021-05-21 22:17:06 +0900
tags : uialertviewcontroller, text, align, attributed, string
toc: true
public: true
parent: [[uikit]]
---
UIAlertViewController의 text는 기본적으로 가운데 정렬이다.  
텍스트 내용이 많으면 왼쪽정렬이 보기 좋을 때도 있는데, AttributedString를 사용하면 된다.

```swift
let paragraphStyle = NSMutableParagraphStyle()
paragraphStyle.alignment = .left

let messageText = NSMutableAttributedString(
    string: "메시지",
    attributes: [
        NSAttributedString.Key.paragraphStyle: paragraphStyle,
        NSAttributedString.Key.font : UIFont.preferredFont(forTextStyle: UIFont.TextStyle.body),
        NSAttributedString.Key.foregroundColor : UIColor.black
    ]
)

let alert = UIAlertController(title: "타이틀", message: "", preferredStyle: .alert)
alert.setValue(messageText, forKey: "attributedMessage")
alert.addAction(UIAlertAction(title: "확인", style: .default) { _ in
    completion()
    self.dismiss(animated: true)
})

self.present(alert, animated: true)
```