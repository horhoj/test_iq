<script setup lang="ts">
import { fetchTestResult } from '@/api/testApi'
import type { FetchResultResponse } from '@/api/testApi.types'
import { ref, watch, watchEffect } from 'vue'

const isLoading = ref(false)
const error = ref<null | string>(null)
const fetchResultResponse = ref<FetchResultResponse | null>(null)

const handleGetTestResut = async () => {
  try {
    isLoading.value = true
    fetchResultResponse.value = null
    error.value = null
    fetchResultResponse.value = await fetchTestResult()
  } catch (e) {
    if (e instanceof Error) {
      error.value = `при получении результата возникла ошибка: ${e.message}`
    } else {
      error.value = 'Неизвестная ошибка при получении результат'
    }
  } finally {
    isLoading.value = false
  }
}

watchEffect(() => {
  if (error.value !== null) {
    alert(error.value)
  }
})
</script>

<template>
  <div class="result-view">
    <div class="result-view-container global-container">
      <template v-if="fetchResultResponse === null">
        <div class="block1">ВАШ РЕЗУЛЬТАТ РАССЧИТАН:</div>
        <div class="block2">
          <span>вы относитесь к 3%</span> респондентов, чей уровень интеллекта более чем на 15
          пунктов отличается от среднего в большую или меньшую сторону!
        </div>
        <div class="result-green-warning">СКОРЕЕ ПОЛУЧИТЕ СВОЙ РЕЗУЛЬТАТ!</div>
        <div class="personal-data-warning">
          В целях защиты персональных данных результат теста, их подробная интерпретация и
          рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
        </div>
        <div class="block5">Звоните скорее, запись доступна всего</div>
        <div class="block6"><span>10:00 </span> минут</div>
        <button class="call-btn" @click="handleGetTestResut" v-if="!isLoading">
          <img src="/result__phone-icon.svg" /> <span>позвонить и прослушать результат</span>
        </button>
        <div class="result-green-warning" v-if="isLoading">ИДЕТ ЗАПРОС РЕЗУЛЬТАТА...</div>
      </template>
      <template v-if="fetchResultResponse !== null">
        <div><strong>Результаты ответа от АПИ</strong></div>
        <div><strong>Имя:</strong> {{ fetchResultResponse.name }}</div>
        <div><strong>Пол:</strong> {{ fetchResultResponse.gender }}</div>
        <div><strong>День рождения:</strong> {{ fetchResultResponse.birth_year }}</div>
        <div><strong>Рост:</strong> {{ fetchResultResponse.height }} см.</div>
      </template>
    </div>
    <div class="footer">
      TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA
      AVETI 18 ANI IMPLINITI,
    </div>
  </div>
</template>

<style lang="css" scoped>
.result-view {
  background-image: url('/test__bg.png');
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  padding: 27px 0;
  justify-content: space-between;
}

.result-view-container {
  display: flex;
  align-items: center;
  position: relative;
}

.block1 {
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 10%;
  text-align: center;
  font-family: PT Serif;
}

.block2 {
  margin-top: 13px;
  padding: 0 30px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: center;
  max-width: 320px;
  font-family: PT Serif;
}

.block2 > span {
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: Auto;
}

.result-green-warning {
  margin-top: 15px;
  font-family: PT Serif;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 10%;
  text-align: center;
  color: rgba(59, 222, 124, 1);
}

.personal-data-warning {
  margin-top: 12px;
  max-width: 260px;
  width: 256;
  height: 114;

  border-radius: 6px;
  background: rgba(28, 39, 65, 1);
  padding: 12px 15px;
  text-align: center;
  font-family: Roboto;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 2px;
  text-align: center;
}
.block5 {
  color: rgba(59, 222, 124, 1);

  font-family: 'PT Serif';
  font-size: 11px;
  line-height: 30px;
  letter-spacing: 10%;
  text-align: center;
}
.block6 {
  color: rgba(59, 222, 124, 1);

  font-family: 'PT Serif';
  font-size: 11px;
  line-height: 30px;
  letter-spacing: 10%;
  text-align: center;
}

.block6 > span {
  font-size: 20px;
}
.call-btn {
  background: rgba(235, 27, 0, 1);
  width: 300px;
  height: 92px;
  padding: 0 15px;

  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  border: none;
  outline: none;
  margin-top: 6px;
}

.call-btn > span {
  font-family: Roboto;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 5%;
  color: #fff;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
}

.footer {
  font-family: Roboto;
  font-weight: 400;
  font-size: 7px;
  line-height: 9px;
  letter-spacing: 3px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 20px;
  margin-bottom: -38px;
  width: 280px;
}
</style>
