---
layout  : category
title   : SwiftUI에서 viewDidLoad는?
summary : 
date    : 2020-11-05 22:53:58 +0900
updated : 2020-11-05 22:53:58 +0900
tag     : develop, iOS, swiftui
toc     : true
public  : true
parent  : [[swiftui]]
latex   : false
---
* TOC
{:toc}

### SwiftUI에서 viewDidLoad는?
```
struct ContentView: View {
    var body: some View {
        VStack {
            Text("Hello World")
        }.onAppear {
            print("ContentView appeared!")
        }.onDisappear {
            print("ContentView disappeared!")
        }
    }
}
```
