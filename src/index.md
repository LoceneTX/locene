---
layout: base.liquid
title: Index
date: 2024-09-16
links:
  - url: https://maps.app.goo.gl/VrifHEJJFaBrJsqS9
    title: Grapevine, TX
    icon: map-pin.svg
  - url: 'tel:214728773'
    title: '(214) 728-1773'
    icon: phone.svg
  - url: https://www.instagram.com/loceneclockworks/
    title: Instagram
    icon: instagram.svg
  - url: https://www.youtube.com/@LoceneClockworks
    title: Youtube
    icon: youtube.svg
  - url: policies
    title: Policies
    icon: check-square.svg
---
<div class="layout-home">
  <video
    aria-hidden="true"
    class="background-video"
    preload="auto"
    autoplay
    loop
    muted
    playsinline
    poster="/assets/media/clock.webp"
  >
    <source src="/assets/media/clock.mp4" type="video/mp4">
  </video>
  <div class="content">
    <div class="logo">
      {%- svg 'media/logo.svg' %}
    </div>
    <nav>
      {%- for link in links %}
        <a class="home-link" href="{{ link.url }}">
          {%- if link.icon %}
            {%- assign icon = 'icons/' | append: link.icon %}
          {%- else %}
            {%- assign icon = 'icons/link.svg' %}
          {%- endif %}
          <div class="link-icon">
            {%- svg icon %}
          </div>
          <div class="link-title">
            {{ link.title }}
          </div>
        </a>
      {%- endfor %}
    </nav>
  </div>
</div>
