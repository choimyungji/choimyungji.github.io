---
layout: category
title: UIImage crop 
date: 2021-03-02 23:37:10 +0900
updated: 2021-03-02 23:37:10 +0900
tags : uikit, uiimage, cgimage, crop
toc: true
public: true
parent: [[ios]]
---
* TOC
{:toc}
```swift
  let cropRect = CGRect(x: 0, y: 0, width: image.size.width, height: image.size.height)
  let imageRef = image.cgImage!.cropping(to: cropRect);
  let newImage = UIImage(cgImage: imageRef!, scale: image.scale, orientation: image.imageOrientation)
```