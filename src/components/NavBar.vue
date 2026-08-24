<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner shell">
      <RouterLink class="wordmark" to="/" aria-label="Stephen Bernard, home">
        <span class="wordmark__mark" aria-hidden="true">SB</span>
        <span class="wordmark__name">Stephen Bernard</span>
      </RouterLink>

      <nav class="site-nav" aria-label="Primary navigation">
        <a href="/#gaffer">Gaffer</a>
        <a href="/#automation">Automation</a>
        <a href="/#code">Code</a>
        <a href="/#writing">Writing</a>
        <a href="/#media">Media</a>
      </nav>

      <RouterLink class="header-contact" :to="{ path: '/', hash: '#contact' }">
        Get in touch
        <span aria-hidden="true">↓</span>
      </RouterLink>
    </div>
  </header>
</template>
