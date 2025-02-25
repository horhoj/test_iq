export type QuestionAnswerType = 'column-list' | 'row-list' | 'color-list'

export interface TestDataItem {
  question: string
  img: { src: string; width: number; height: number } | null
  answerType: QuestionAnswerType
  anwerList: string[]
}
