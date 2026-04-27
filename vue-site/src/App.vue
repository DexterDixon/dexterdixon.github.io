<script setup lang="ts">
import type router from './router';

</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/resume">Resume</router-link>
  </nav>

  <router-view />
</template>

<style scoped></style>
