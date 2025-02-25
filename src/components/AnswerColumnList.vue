<script setup lang="ts">
import { getUUID } from '@/helpers/getUUID'
import classNames from 'classnames'
import { computed, defineProps } from 'vue'

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
        <span :class="classNames('balloon', props.currentAnswerIdx === index && 'active')" />{{
          answer
        }}
      </button>
    </li>
  </ul>
</template>

<style lang="css" scoped>
.answer-list {
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.answer-list-item {
  width: 100%;
}

.answer-list-btn {
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(242, 243, 243, 0.15);
  gap: 40px;
  color: #fff;
  border: none;
  outline: none;
  padding: 10px 35px;
  font-size: 18px;
  cursor: pointer;
}
.answer-list-btn.active {
  background-color: rgba(255, 199, 0, 1);
  color: rgba(13, 12, 17, 1);
}

.balloon {
  border-radius: 50%;
  min-width: 20px;
  min-height: 20px;
  border: 1px solid rgba(255, 255, 255, 1);
}

.balloon.active {
  border: 1px solid rgba(13, 12, 17, 1);
  background-color: rgba(41, 80, 194, 1);
}
</style>
