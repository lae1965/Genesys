import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

import { getContentByValue } from '@/utils/selectMenuUtil';
import type { ContentItem } from '@/interfaces/contentItem.interface';

const SERVER_URL = 'http://localhost:3000/';

export const useContentListStore = defineStore('contentListStore', () => {
  const contentList = reactive([] as ContentItem[]);
  const isLoading = ref(false);

  const setNewItem = async (action: string, name: string) => {
    isLoading.value = true;
    let id: number | string;
    try {
      const response = await axios.post(`${SERVER_URL}${action}`, { name });
      id = response.data.id;
    } catch (e) {
      console.log(e);
      id = 'Ошибка сохранения';
    }
    contentList.unshift({
      id,
      action: getContentByValue(action),
      name,
    });
    isLoading.value = false;
  };

  return { contentList, isLoading, setNewItem };
});
