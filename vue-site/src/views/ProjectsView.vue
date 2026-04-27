<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects'
</script>

<template>
  <main class="container">
    <div class="projects-grid">
      <ProjectCard v-for="p in projects" :key="p.title" :project="p" />
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}
</style>
