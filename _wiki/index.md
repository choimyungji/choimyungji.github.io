---
layout  : wikiindex
title   : wiki
toc     : true
public  : true
comment : false
regenerate: true
---

## wiki items

* [[develop]]
* [[life]]
* [[how-to]]
* [[etc]]
* [[tip]]
* [[tool]]

---

## blog posts
<div>
    <ul>
{% for post in site.posts limit:10 %}
    {% if post.public != false %}
        <li>
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
                {{ post.title }}
            </a>
        </li>
    {% endif %}
{% endfor %}
    </ul>
</div>

