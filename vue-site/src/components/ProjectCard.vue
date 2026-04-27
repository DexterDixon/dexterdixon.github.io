<script setup lang="ts">
import type { Project } from '@/data/projects'

defineProps<{ project: Project }>()
</script>

<template>
  <div class="project-card">
    <h3>
      <a :href="project.link" :target="project.link.startsWith('http') ? '_blank' : undefined" :rel="project.link.startsWith('http') ? 'noopener' : undefined">
        {{ project.title }}
      </a>
    </h3>
    <p>{{ project.description }}</p>
    <div class="project-tech-wrapper">
      <span class="project-tech-label">Tools &amp; Tech:</span>
      <ul class="project-tech">
        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background-color: var(--color-bg-main);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.project-card h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.project-card h3 a {
  color: var(--color-primary);
  text-decoration: none;
}

.project-card h3 a:hover {
  text-decoration: underline;
}

.project-card p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-text-body);
  flex: 1;
}

.project-tech-wrapper {
  margin-top: 0.5rem;
}

.project-tech-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  display: block;
  margin-bottom: 0.4rem;
}

.project-tech {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.project-tech li {
  font-size: 0.75rem;
  color: var(--color-text-body);
  background-color: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  border-radius: 2px;
  padding: 0.125rem 0.5rem;
}
</style>
