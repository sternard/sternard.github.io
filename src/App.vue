<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <NavBar />
  <RouterView />
</template>
