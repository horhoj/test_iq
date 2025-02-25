<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import Nav from './Nav.vue'
import { useRoute } from 'vue-router'
import { getAppRouteName } from '@/router/appRoutes'

const isShowNav = ref(false)
const route = useRoute()

watchEffect(() => {
  if (isShowNav.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})

const handleNavBtnClk = () => {
  isShowNav.value = !isShowNav.value
}

const handleNavClose = () => {
  isShowNav.value = false
}
</script>

<template>
  <Teleport to="body" v-if="isShowNav">
    <Nav @close="handleNavClose" />
  </Teleport>
  <header class="header">
    <button class="menu-button" @click="handleNavBtnClk">
      <span />
      <span />
      <span />
    </button>
    <div class="test-view-title" v-if="route.name === getAppRouteName('test')">
      <img src="/main__brain.png" alt="brain" />ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ
    </div>
    <div class="test-view-title" v-if="route.name === getAppRouteName('result')">
      <img src="/main__brain.png" alt="brain" />ГОТОВО!
    </div>
    <div />
  </header>
</template>

<style lang="css" scoped>
.test-view-result {
  color: rgba(255, 199, 0, 1);
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  gap: 16px;
}
.test-view-result > img {
  aspect-ratio: 1;
  height: 48px;
}

.test-view-title {
  color: rgba(255, 199, 0, 1);
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
}
.test-view-title > img {
  aspect-ratio: 1;
  height: 48px;
}

.header {
  position: fixed;
  width: 100%;
  height: 46px;
  background-color: #181818;
  padding: 0 20px 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.menu-button {
  min-height: 16px;
  min-width: 24px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: fixed;
  left: 20px;
  top: 15px;
}

.menu-button > span {
  display: flex;
  /* background-color: #dadada; */
  /* background: #dadada; */
  background: #696969;

  height: 3px;
  width: 100%;
}
</style>
