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
      >
        {{ answer }}
      </button>
    </li>
  </ul>
</template>

<style lang="css" scoped>
.answer-list {
  gap: 8px;
  display: flex;
  list-style: none;
  width: fit-content;
  margin: 0 auto;
}

.answer-list-item {
}

.answer-list-btn {
  width: 44px;
  height: 44px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
}

.answer-list-btn.active {
  border: 6px solid rgba(255, 199, 0, 1);
}
</style>
