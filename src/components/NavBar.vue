<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="footer">
        <span><a href="https://github.com/sternard" target="_blank">GitHub</a></span>
        <span><a href="mailto:stephenbernard@hotmail.co.uk" target="_blank">Support</a></span>
    </div>
</template>

<style>
.footer {
    position: fixed;
    bottom: 20px;
    width: 100vw;
    text-align: center;
}
span {
    margin: 0 10px
}
</style>