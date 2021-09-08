---
layout: wiki
title: VIM 플러그인
date: 2021-09-08 23:16:14 +0900 
updated: 2021-09-08 23:16:14 +0900 
categories: macux
parent  : [[vim]]
public  : true
toc : true
tags : vim, vim-plug
---
## vim-plug 설치
```
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```
cli에서 위의 내용을 복사하여 입력한다.


## 플러그인 설치
```
call plug#begin()
Plug '플러그인 이름의 git 주소나, GitHub 저장소 이름'
Plug 'vimwiki/vimwiki', { 'branch': 'dev' } 
" main브랜치가 아닌 브랜치 설정 가능
call plug#end()
```


### link
https://github.com/junegunn/vim-plug

