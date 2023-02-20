<script setup lang="ts">
import FormData from '@/components/FormData.vue';
import ContentListing from '@/components/ContentListing.vue';
</script>

<template>
  <main class="main">
    <FormData />
    <ContentListing />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  max-width: 1580px;
  margin: 0 auto;
  font-size: 16px;
  font-family: sans-serif;
}

.main {
  padding: 40px;
}
</style>
