<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="footer">
        <span><RouterLink to="/">Home</RouterLink></span>
        <span><RouterLink to="/wordle">Wordle clone</RouterLink></span>
        <span><RouterLink to="/spelling-bee">Spelling Bee clone</RouterLink></span>
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