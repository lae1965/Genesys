<script setup lang="ts">
import { computed } from 'vue';

import { useSelectValueStore } from '@/stores/selectValue.store';
import { useContentListStore } from '@/stores/contentList.store';
import LoaderList from './LoaderList.vue';

const selectValueStore = useSelectValueStore();
const contentListStore = useContentListStore();

const props = defineProps({
  modelValue: {
    type: String,
  },
});

const emit = defineEmits(['update:modelValue']);

const localComputed = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});
</script>

<template>
  <div class="submit">
    <input
      class="input"
      v-show="selectValueStore.isSelected"
      v-model="localComputed"
      type="text"
      :placeholder="selectValueStore.getSelectedContent"
    />
    <LoaderList v-if="contentListStore.isLoading" />
    <button
      v-else
      class="button"
      type="submit"
      :disabled="!selectValueStore.isSelected || !localComputed?.length"
    >
      Создать
    </button>
  </div>
</template>

<style scoped>
.input,
.button {
  padding: 10px 12px;
  border: 2px solid #aaa;
  box-shadow: 0 5px 10px 0 #aaa;
  border-radius: 10px;
  outline: none;
}

.button {
  background-color: #1a73e8;
  color: #ffffff;
}

.button:disabled {
  background-color: #e8eaed;
  color: #000000;
  font-weight: lighter;
  opacity: 0.5;
}

.input {
  flex: 1;
  background-image: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
}

.input::placeholder {
  opacity: 0.5;
}

.submit {
  display: flex;
  gap: 20px;
  flex: 1;
}
</style>
