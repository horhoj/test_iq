<script setup lang="ts">
import StartTestBtn from '@/components/StartTestBtn.vue'
import { getAppRoute, MAIN_HELP_HASH } from '@/router/appRoutes'
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const startHelpBlock = ref<HTMLDivElement | null>(null)

watchEffect(() => {
  if (route.hash === MAIN_HELP_HASH) {
    startHelpBlock.value?.scrollIntoView({ behavior: 'smooth' })
    router.push(getAppRoute('main'))
  }
})

const handleGoToHelpBlock = () => {
  startHelpBlock.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="main-view">
    <div class="top-text">Пройдите точный и быстрый</div>
    <div class="big-text first">ТЕСТ НА</div>
    <div class="big-text">ОПРЕДЕЛЕНИЕ</div>
    <div class="big-text">IQ</div>
    <img src="/main__brain.png" alt="brain" class="brain" />
    <StartTestBtn variant="fill" />
    <div class="bottom-text yellow first">и получите рекомендации</div>
    <div class="bottom-text yellow">по развитию своего интеллекта</div>
    <div class="bottom-text">и улучшению финансового</div>
    <div class="bottom-text">благосостояния и личной жизни</div>
    <button @click="handleGoToHelpBlock" class="help-btn" />
    <div class="more-details-text-helper">подробнее</div>

    <div class="help-block-1 global-container" ref="startHelpBlock">
      <a name="help" />
      <img src="/main__help-1-bracket-open.svg" class="help-block-1__bracket-open" />
      <span class="help-block-1-text">
        Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и
        выработать список рекомендаций для повышения этого показателя.
      </span>
      <img src="/main__help-1-bracket-close.svg" class="help-block-1__bracket-close" />
    </div>
    <div class="help-block-2 global-container">
      <div>Также по результатам теста</div>
      <div><strong>ВЫ ПОЛУЧИТЕ</strong> подробные</div>
      <div><strong>СОВЕТЫ</strong> по определению наиболее</div>
      <div>перспективной <strong>ДЛЯ ВАШЕГО ТИПА</strong></div>
      <div><strong>интеллекта СФЕРЫ ДЕЯТЕЛЬНОСТИ,</strong></div>
      <div>которая принесет вам скорейший финансовый результат.</div>
      <img src="/main__help-2-img.png" alt="help-block-2-img" class="help-block-2-img" />
      <StartTestBtn variant="fill" />
    </div>
    <div class="help-block-3 global-container">
      <div class="help-block-3__top-text">
        Прохождение теста займет у вас не более <span>12 минут</span>, а его результаты вы сможете
        <span>использовать всю жизнь</span>.
      </div>
      <div class="help-block-3__bottom-text">
        Профессиональная интерпретация и детально проработанные рекомендации позволят вам
        качественно изменить все аспекты своей жизни: от финансового до любовного.
      </div>
    </div>
    <StartTestBtn variant="transparent" />
    <div class="footer">c 2019</div>
  </div>
</template>

<style lang="css" scoped>
.footer {
  font-size: 10px;
  line-height: 23px;
  margin: 52px auto 0 auto;
  color: #ffffff80;
}

.help-block-3 {
  padding: 56px 12px 0 12px;
}

.help-block-3__top-text {
  width: 220px;
  font-size: 15px;
  line-height: 20px;
}

.help-block-3__top-text > span {
  color: #ffc700;
}

.help-block-3__bottom-text {
  padding: 30px 15px;
  font-size: 15px;
  line-height: 20px;
  background: #f3f3f2cc;
  border-radius: 20px;
  font-size: 16px;
  line-height: 23px;
  color: #181818;
  margin-top: 14px;
  margin-bottom: 33px;
}

.help-block-2-img {
  display: block;
  margin: 38px auto 0 auto;
}

.help-block-2 {
  background-color: #fff;
  color: #272727;
  padding: 38px 11px;
  font-size: 16px;
  line-height: 24px;
}

.more-details-text-helper {
  font-size: 8px;
  line-height: 10px;
}

.help-block-1 {
  margin-top: 50px;
  /* background-image: url('/main__help-1-bg.png'); */
  width: 100%;
  background: url('/main__help-1-bg.png');
  background: center / cover no-repeat url('/main__help-1-bg.png');

  /* background-repeat: no-repeat; */
  height: 340px;
  padding: 43px 24px 24px 24px;
  font-size: 18px;
}

.help-block-1-text {
  display: block;
  width: 180px;
  text-align: center;
  margin: 0 auto;
}

.help-block-1__bracket-open {
  display: block;
  height: 23px;
  aspect-ratio: 1;
  margin: auto auto auto 0;
}

.help-block-1__bracket-close {
  display: block;
  margin: auto 0 auto auto;
  height: 23px;
  aspect-ratio: 1;
}

.main-view {
  background-image: url('/main__bg.png');
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  gap: 0;
  padding: 27px 0;
}

.top-text {
}

.big-text {
  color: #ffc700;
  font-size: 30px;
  font-weight: 700;
}
.big-text.first {
  margin-top: 40px;
}

.brain {
  width: 200px;
  aspect-ratio: 1;
  display: block;
}

.bottom-text.first {
  margin-top: 20px;
}

.bottom-text.yellow {
  color: #ffc700;
}

.bottom-text {
  font-size: 15px;
  line-height: 19px;
}

.help-btn {
  width: 20px;
  height: 20px;
  background-image: url(/main__arrow-up-btn-icon.svg);
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  display: block;
  margin-top: 11px;
}
</style>
