---
layout: post
title:  "Python3 SSL 에러"
date:   2018-08-19 21:45:58 +0900
categories: python
tag : python ssl certificate
---
## Python3 SSL 에러
텐서플로 예제돌리던 중 위의 MNIST 리소스를 다운받는 코드가 있는데
```python
from tensorflow.examples.tutorials.mnist import input_data
# Check out https://www.tensorflow.org/get_started/mnist/beginners for
# more information about the mnist dataset
mnist = input_data.read_data_sets("MNIST_data/", one_hot=True)
```
아래의 에러를 받았다.
```shell
urllib.error.URLError: <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed (_ssl.c:777)>
```
이럴땐 파이썬 인증서를 인스톨한다.
```shell
> /Applications/Python\ 3.6/Install\ Certificates.command
```
