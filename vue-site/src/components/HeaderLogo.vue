<script setup lang="ts">
import headerImg from '@/assets/img/header.webp'
</script>

<template>
  <div class="header-logo">
    <img :src="headerImg" alt="Dexter Dixon" class="header-img" />
  </div>
</template>

<style scoped>
.header-logo {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 1.5rem;
  border-bottom: 1px solid #e8e8e8;
}

.header-img {
  max-height: 80px;
  width: auto;
  object-fit: contain;
}
</style>
