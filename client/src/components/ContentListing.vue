<script setup lang="ts">
import { useContentListStore } from '@/stores/contentList.store';

const contentListStore = useContentListStore();
</script>

<template>
  <div v-show="contentListStore.contentList.length">
    <div class="listing title">
      <span class="id border">id</span>
      <span class="action border">Действие</span>
      <span class="name border">Наименование</span>
    </div>
    <div
      class="listing"
      v-for="item in contentListStore.contentList"
      :key="item.id"
    >
      <span
        class="id border"
        :class="{ red: item.id === 'Ошибка сохранения' }"
        >{{ item.id }}</span
      >
      <span class="action border">{{ item.action }}</span>
      <span class="name border">{{ item.name }}</span>
    </div>
  </div>
</template>

<style scoped>
.listing {
  display: flex;
}

.title {
  border-top: 1px solid #aaa;
  font-weight: bold;
  text-align: center;
}

.border {
  border-bottom: 1px solid #aaa;
  border-right: 1px solid #aaa;
  padding: 5px 2px;
}

.id {
  width: 11%;
  min-width: 165px;
  border-left: 1px solid #aaa;
}

.action {
  width: 7%;
  min-width: 105px;
}

.name {
  flex: 1;
}

.red {
  color: red;
  animation: blinker 0.7s linear 20;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
