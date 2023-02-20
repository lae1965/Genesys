import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { selectItems, getContentByValue } from '@/utils/selectMenuUtil';

export const useSelectValueStore = defineStore('selectValueStore', () => {
  const selectValue = ref(selectItems[0].value);

  const isSelected = computed(() => selectValue.value !== selectItems[0].value);

  const getSelectedContent = computed(() =>
    getContentByValue(selectValue.value)
  );

  function setSelectValue(value: string) {
    selectValue.value = value;
  }

  return { selectValue, isSelected, getSelectedContent, setSelectValue };
});
