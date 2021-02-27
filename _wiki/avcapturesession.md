---
layout: category
title: AVCaptureSession 
date: 2021-02-27 22:22:13 +0900
updated: 2021-02-27 22:22:13 +0900
tags : tags
toc: true
public: true
parent: [avfoundation]
---
* TOC
{:toc}
## 개요
캡처 활동을 관리하고 오디오, 비디오 입력장치의 데이터 흐름을 조정하여 출력을 캡처하는 개체

```swift
let session = AVCaptureSession()

//세션 초기화 후 시작
func setupAVCapture() {
    session.sessionPreset = AVCaptureSession.Preset.high
    camera = AVCaptureDevice.default(for: .video)

    do{
        let cameraCaptureInput = try AVCaptureDeviceInput(device:camera!)
        cameraCaptureOutput = AVCapturePhotoOutput()

        session.addInput(cameraCaptureInput)
        session.addOutput(cameraCaptureOutput!)
    }catch{
        print(error.localizedDescription)
    }

    cameraPreviewLayer = AVCaptureVideoPreviewLayer(session: session)
    cameraPreviewLayer?.videoGravity = AVLayerVideoGravity.resizeAspectFill
    cameraPreviewLayer?.connection?.videoOrientation = AVCaptureVideoOrientation.portrait

    let rootLayer = previewView.layer
    rootLayer.masksToBounds = true
    cameraPreviewLayer?.frame = rootLayer.bounds
    rootLayer.addSublayer(cameraPreviewLayer!)

    session.startRunning()
}

// 카메라 화면 캡쳐 이벤트 트리거
@IBAction func shotButtonTouched(_ sender: Any) {
    let settings = AVCapturePhotoSettings()
    cameraCaptureOutput?.capturePhoto(with: settings,
                                        delegate: self)
} 

// 캡쳐 완료 델리게이트
func photoOutput(_ output: AVCapturePhotoOutput, didFinishProcessingPhoto photo: AVCapturePhoto, error: Error?) {
    print("SHOT")

}


```
