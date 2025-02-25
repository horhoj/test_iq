<script lang="ts" setup>
import ProgressBar from '@/components/ProgressBar.vue'
import { testData } from '@/testData/testData'
import { computed, ref } from 'vue'
import AnswerColumnList from '@/components/AnswerColumnList.vue'
import AnswerColorList from '@/components/AnswerColorList.vue'
import AnswerRowList from '@/components/AnswerRowList.vue'
import TestProcessingResult from '@/components/TestProcessingResult.vue'
import { useRouter } from 'vue-router'
import { getAppRoute } from '@/router/appRoutes'

type TestStep = 'questions' | 'processing'

const router = useRouter()

const currentQuestionIdx = ref(0)
const progress = computed(() => ((currentQuestionIdx.value + 1) / (testData.length + 1)) * 100)
const currentQuestionData = computed(() => testData[currentQuestionIdx.value])
const currentAnswerIdx = ref<null | number>(null)
const testResult = ref<number[]>([])
const testStep = ref<TestStep>('questions')

const handleAnswerClk = (idx: number) => {
  currentAnswerIdx.value = idx
}

const handleNext = () => {
  if (currentAnswerIdx.value === null) return
  testResult.value.push(currentAnswerIdx.value)
  currentAnswerIdx.value = null
  currentQuestionIdx.value++
  if (currentQuestionIdx.value >= testData.length) {
    testStep.value = 'processing'
    setTimeout(() => {
      router.push(getAppRoute('result'))
    }, 5000)
  }
}
</script>

<template>
  <div class="test-view">
    <div class="global-container test-view-container">
      <ProgressBar :progress="progress" />
      <div class="question-content" v-if="testStep === 'questions'">
        <div class="question">{{ currentQuestionData.question }}</div>
        <img
          v-if="currentQuestionData.img !== null"
          :src="currentQuestionData.img.src"
          alt="question-img"
          class="question-img"
          :style="{
            width: `${currentQuestionData.img.width}px`,
            height: `${currentQuestionData.img.height}px`
          }"
        />
        <AnswerColumnList
          v-if="currentQuestionData.answerType === 'column-list'"
          :anwer-list="currentQuestionData.anwerList"
          @change="handleAnswerClk"
          :current-answer-idx="currentAnswerIdx"
        />
        <AnswerColorList
          v-if="currentQuestionData.answerType === 'color-list'"
          :anwer-list="currentQuestionData.anwerList"
          @change="handleAnswerClk"
          :current-answer-idx="currentAnswerIdx"
        />
        <AnswerRowList
          v-if="currentQuestionData.answerType === 'row-list'"
          :anwer-list="currentQuestionData.anwerList"
          @change="handleAnswerClk"
          :current-answer-idx="currentAnswerIdx"
        />
      </div>
      <button
        class="next-btn"
        :disabled="currentAnswerIdx === null"
        @click="handleNext"
        v-if="testStep === 'questions'"
      >
        ДАЛЕЕ
      </button>
      <TestProcessingResult v-if="testStep === 'processing'" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.question-img {
  display: block;
  margin: 0 auto;
}

.question-content {
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
}
.test-view {
  background-image: url('/test__bg.png');
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;

  padding: 27px 0;
}

.test-view-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
}

.question {
  font-family: PT Serif;
  font-size: 20px;
  line-height: 26.5px;
  letter-spacing: 5%;
  text-align: center;
  padding: 0 20px;
}

.next-btn {
  width: 189px;
  height: 41px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14;
  background: radial-gradient(50% 50% at 50% 50%, #ffc700 0%, #ffc700 100%);
  color: rgba(13, 12, 17, 1);
  border: none;
}

.next-btn:disabled {
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25) inset;
  background: rgba(218, 218, 218, 1);
  color: rgba(142, 142, 142, 1);
  cursor: auto;
}
</style>
