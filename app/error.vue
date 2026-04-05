<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
</script>

<template>
  <div class="errorPage">
    <NuxtImg src="/images/404Image.avif" />
    <article class="errorInfo">
      <NuxtLink to="/">Go back home</NuxtLink>
    </article>
  </div>
</template>
<style scoped>
.errorPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  object-fit: scale-down;
  object-position: center;
  background-color: #ffffff;
}

.errorInfo {
  position: fixed;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #222222;
}
</style>
