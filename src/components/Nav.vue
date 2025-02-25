<script lang="ts" setup>
import { getAppRoute } from '@/router/appRoutes'
import { RouterLink } from 'vue-router'

const emit = defineEmits<{ (e: 'close'): void }>()

const handleNavClose = () => {
  emit('close')
}
</script>

<template>
  <nav class="nav">
    <button class="close-button" @click="handleNavClose">
      <span />
      <span />
    </button>
    <div class="linkList">
      <RouterLink :to="getAppRoute('main')" @click="handleNavClose" class="link">
        ГЛАВНАЯ
      </RouterLink>
      <RouterLink :to="getAppRoute('help')" @click="handleNavClose" class="link">
        ИНФОРМАЦИЯ О ТЕСТЕ
      </RouterLink>
      <RouterLink :to="getAppRoute('test')" @click="handleNavClose" class="link">
        ПРОЙТИ ТЕСТ
      </RouterLink>
    </div>
  </nav>
</template>

<style lang="css" scoped>
.linkList {
  display: flex;
  flex-direction: column;
  margin-top: 110px;
  gap: 27px;
}

.link {
  font-size: 16px;
  color: #fff;
  text-decoration: none;
}

.link:hover {
  color: #ffc700;
}

.link.router-link-active {
  color: #ffc700;
}

.nav {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #181818;
  height: 100%;
  padding: 23px;
}

.close-button {
  display: flex;
  min-height: 28px;
  min-width: 28px;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border: none;
  cursor: pointer;
  position: relative;
  margin: auto -10px auto auto;
}

.close-button > span {
  background-color: #ffc700;
  display: flex;
  width: 32px;
  height: 3px;
  position: absolute;
  left: -3px;
  top: 12px;
}

.close-button > span:nth-child(1) {
  transform: rotate(45deg);
}

.close-button > span:nth-child(2) {
  transform: rotate(135deg);
}
</style>
