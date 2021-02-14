---
layout  : category
title   : Bitmap을 Byte배열로 전환 
date    : 2021-02-14 22:55:59 +0900
updated : 2021-02-14 22:55:59 +0900
tag     : android, java, bitmap, bytearray, type, convert
toc     : true
public  : true
parent  : [[android]]
latex   : false
---
## PNG등의 Encoding을 사용한 방법
### Bitmap을 ByteArray로 
```
public static byte[] bitmapToByteArray( Bitmap bitmap ) {
        ByteArrayOutputStream stream = new ByteArrayOutputStream() ;
        bitmap.compress( Bitmap.CompressFormat.PNG, 100, stream) ;
        byte[] byteArray = stream.toByteArray() ;
        return byteArray ;
    }
```
### ByteArray를 bitmap으로
```
public static Bitmap byteArrayToBitmap(byte[] bytearr) {
    return BitmapFactory.decodeByteArray(bytearr, 0, bytearr.length);
}
```

## Buffer를 사용한 방법
### Bitmap을 ByteArray로 
```
Bitmap bitmap;

ByteBuffer buffer= ByteBuffer.Allocate(bitmap.ByteCount);
bitmap.copyPixelsToBuffer(buffer);
byte[] byteArray = buffer.ToArray<byte>();
```

### ByteArray를 bitmap으로
```
byte[] byteArray;
Bitmap bitmap; 
 
int width = 112;
int height = 112;

bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
ByteBuffer buffer = ByteBuffer.wrap(byteArray);
buffer.rewind();
bitmap.copyPixelsFromBuffer(buffer);
```