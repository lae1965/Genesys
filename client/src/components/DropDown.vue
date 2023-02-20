<script setup lang="ts">
import { useSelectValueStore } from '@/stores/selectValue.store';
import { selectItems } from '@/utils/selectMenuUtil';

const selectValueStore = useSelectValueStore();
</script>

<template>
  <select
    name="choice"
    id="choice"
    v-model="selectValueStore.selectValue"
    @change="
      {
        selectValueStore.setSelectValue(selectValueStore.selectValue);
      }
    "
  >
    <option
      v-for="(item, index) in selectItems"
      :value="item.value"
      :key="index"
    >
      {{ item.content }}
    </option>
  </select>
</template>

<style>
select {
  display: block;
  padding: 10px 130px 10px 12px;
  width: auto;
  max-width: 100%;
  border: 2px solid #aaa;
  box-shadow: 0 5px 10px 0 #aaa;
  border-radius: 10px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url(../images/caret-down-solid.svg),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 17px top 50%, 0 0;
  background-size: 15px auto, 100%;
  outline: none;
}

select option {
  font-weight: normal;
}
</style>
