<script setup lang="ts">
import { ref } from 'vue';

import DropDown from '@/components/DropDown.vue';
import SubmitButton from '@/components/SubmitButton.vue';
import { useContentListStore } from '@/stores/contentList.store';
import { useSelectValueStore } from '@/stores/selectValue.store';

const contentListStore = useContentListStore();
const selectValueStore = useSelectValueStore();

const instanceName = ref('');

const createNewItem = () => {
  contentListStore.setNewItem(selectValueStore.selectValue, instanceName.value);
  instanceName.value = '';
};
</script>

<template>
  <form class="form" @submit.prevent="createNewItem">
    <DropDown />
    <SubmitButton v-model="instanceName" />
  </form>
</template>

<style>
.form {
  display: flex;
  gap: 20px;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  margin-bottom: 70px;
}
</style>
