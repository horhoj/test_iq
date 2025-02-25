<script setup lang="ts">
import { getAppRoute } from '@/router/appRoutes'
import classNames from 'classnames'
import { RouterLink } from 'vue-router'

defineEmits<{ (e: 'click'): void }>()
const props = defineProps<{ variant: 'fill' | 'transparent' }>()
</script>

<template>
  <RouterLink :to="getAppRoute('test')" :class="classNames('start-test-link', props.variant)">
    ПРОЙТИ ТЕСТ
  </RouterLink>
</template>

<style lang="css" scoped>
.start-test-link {
  width: 200px;
  margin: 0 auto;
  min-height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}

.fill {
  color: black;
  background: radial-gradient(50% 50% at 50% 50%, #ffc700 0%, #ffc700 100%);
}

.transparent {
  color: #fff;
  background: rgba(0, 0, 0, 0);
  border: 1px solid #fff;
}
</style>
