---
layout: default
title: "Blog"
description: 개발과 관련된 여러가지 글을 올립니다.
main: true
project-header: true
---

<ul class="catalogue">
{% assign sorted = site.pages | sort: 'order' | reverse %}
{% for page in sorted %}
{% if page.blog == true %}
{% include post-list.html %}
{% endif %}
{% endfor %}
</ul>