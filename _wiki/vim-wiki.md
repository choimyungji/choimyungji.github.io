---
layout  : wiki
title   : vim-wiki 사용하기 
summary : 
date    : 2021-09-08 23:52:44 +0900
updated : 2021-09-08 23:52:44 +0900
tags    : 
toc     : true
public  : true
parent  : [[vim]] 
latex   : false
---
* TOC
{:toc}

## wiki 메타정보 자동생성
vimrc에 해당코드를 넣는다.
위키의 URL을 설정하고 해당 위치에서 새파일을 또는 라인수가 0인 파일을 여는 경우 아래 펑션을 실행한다.

```
let g:vimwiki_list = [
    \{
    \   'path': '/Users/maeng/choimyungji.github.io/_wiki',
    \   'ext' : '.md',
    \   'diary_rel_path': '.',
    \},
\]

function! NewTemplate()

    let l:wiki_directory = v:false

	    echom expand('%:p:h')
	    
    for wiki in g:vimwiki_list
	    echom wiki.path
        if expand('%:p:h') == wiki.path
		echom "ehere"
            let l:wiki_directory = v:true
            break
        endif
    endfor

    if !l:wiki_directory
        return
    endif

    if line("$") > 1
        return
    endif

    let l:template = []
    call add(l:template, '---')
    call add(l:template, 'layout  : wiki')
    call add(l:template, 'title   : ')
    call add(l:template, 'summary : ')
    call add(l:template, 'date    : ' . strftime('%Y-%m-%d %H:%M:%S +0900'))
    call add(l:template, 'updated : ' . strftime('%Y-%m-%d %H:%M:%S +0900'))
    call add(l:template, 'tags    : ')
    call add(l:template, 'toc     : true')
    call add(l:template, 'public  : true')
    call add(l:template, 'parent  : ')
    call add(l:template, 'latex   : false')
    call add(l:template, '---')
    call add(l:template, '* TOC')
    call add(l:template, '{:toc}')
    call add(l:template, '')
    call add(l:template, '# ')
    call setline(1, l:template)
    execute 'normal! G'
    execute 'normal! $'

    echom 'new wiki page has created'
endfunction

autocmd BufRead,BufNewFile *.md call NewTemplate()
```
