<script setup lang="ts">
import { getUUID } from '@/helpers/getUUID'
import { computed, defineProps } from 'vue'
import classNames from 'classnames'

const props = defineProps<{ anwerList: string[]; currentAnswerIdx: number | null }>()
const emit = defineEmits<{ (e: 'change', idx: number): void }>()
const anwerList = computed(() => props.anwerList.map((answer) => ({ id: getUUID(), answer })))
</script>

<template>
  <ul class="answer-list">
    <li v-for="({ answer, id }, index) in anwerList" :key="id" class="answer-list-item">
      <button
        @click="() => emit('change', index)"
        :class="classNames('answer-list-btn', props.currentAnswerIdx === index && 'active')"
        :style="{ backgroundColor: answer }"
      />
    </li>
  </ul>
</template>

<style lang="css" scoped>
.answer-list {
  display: grid;
  grid-template-columns: repeat(3, 75px);
  grid-template-rows: repeat(3, 75px);
  gap: 21px;

  list-style: none;
  width: fit-content;
  margin: 0 auto;
}

.answer-list-item {
}

.answer-list-btn {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
}

.answer-list-btn.active {
  border: 6px solid rgba(255, 199, 0, 1);
}
</style>
