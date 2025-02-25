import type { TestDataItem } from './testTypes'

export const testData: TestDataItem[] = [
  { question: 'Ваш пол', img: null, answerType: 'column-list', anwerList: ['Мужчина', 'Женщина'] },
  {
    question: 'Укажите ваш возраст: ',
    img: null,
    answerType: 'column-list',
    anwerList: ['До 18', 'От 18 до 28', 'от 29 до 35', 'От 36']
  },
  {
    question: 'Выберите лишнее:',
    img: null,
    anwerList: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина'],
    answerType: 'column-list'
  },
  {
    question: 'Продолжите числовой ряд: 18  20  24  32',
    img: null,
    answerType: 'column-list',
    anwerList: ['62', '48', '74', '57', '60', '77']
  },
  {
    question: 'Выберите цвет, который сейчас наиболее Вам приятен:',
    img: null,
    answerType: 'color-list',
    anwerList: [
      'rgba(168, 168, 168, 1)',
      'rgba(0, 0, 169, 1)',
      'rgba(0, 167, 1, 1)',
      'rgba(246, 1, 0, 1)',
      'rgba(253, 255, 25, 1)',
      'rgba(169, 84, 3, 1)',
      'rgba(0, 0, 0, 1)',
      'rgba(133, 0, 104, 1)',
      'rgba(70, 178, 172, 1)'
    ]
  },
  {
    question: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
    img: null,
    answerType: 'color-list',
    anwerList: [
      'rgba(168, 168, 168, 1)',
      'rgba(70, 178, 172, 1)',
      'rgba(169, 84, 3, 1)',
      'rgba(0, 167, 1, 1)',
      'rgba(0, 0, 0, 1)',
      'rgba(246, 1, 0, 1)',
      'rgba(133, 0, 104, 1)',
      'rgba(253, 255, 25, 1)',
      'rgba(0, 0, 169, 1)'
    ]
  },
  {
    question: 'Какой из городов лишний?',
    img: null,
    answerType: 'column-list',
    anwerList: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава']
  },
  {
    question: 'Выберите правильную фигуру из четырёх пронумерованных.',
    img: { src: '/test__question-8-img.png', width: 185, height: 235 },
    answerType: 'row-list',
    anwerList: ['1', '2', '3', '4']
  },
  {
    question: 'Вам привычнее и важнее:',
    img: null,
    answerType: 'column-list',
    anwerList: [
      'Наслаждаться каждой минутой проведенного времени',
      'Быть устремленными мыслями в будущее',
      'Учитывать в ежедневной практике прошлый опыт'
    ]
  },
  {
    question: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ',
    img: { src: '/test__question-10-img.png', width: 173, height: 115 },
    answerType: 'column-list',
    anwerList: ['оно остроконечное', 'оно устойчиво', 'оно-находится в состоянии равновесия']
  },
  {
    question: 'Вставьте подходящее число',
    img: { src: '/test__question-11-img.png', width: 228, height: 207 },
    answerType: 'row-list',
    anwerList: ['34', '36', '53', '44', '66', '42']
  }
]
