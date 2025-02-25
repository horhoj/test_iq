<script lang="ts" setup>
const props = defineProps<{ progress: number }>()
</script>

<template>
  <div class="progress-bar">
    <div class="progress" :style="{ width: `${props.progress}%` }" />
  </div>
</template>

<style lang="css" scoped>
.progress-bar {
  background: #f2f3f399;
  border-radius: 10px;
  width: 260px;
  height: 11px;
  overflow: hidden;
}
.progress {
  border-radius: 10px;
  height: 11px;
  background: #3bde7c;
}
</style>
