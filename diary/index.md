---
layout: default
work: true
main: true
title: Diary
description: 무슨일이 있으면 적습니다
project-header: true
header-img: "img/project_bg.jpg"
---

<div class="catalogue">
{% assign sorted = site.pages | sort: 'date' | reverse %}
{% for page in sorted %}
{% if page.diary == true %}

     {% include post-list.html %}

{% endif %}
{% endfor %}
</div>