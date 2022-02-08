export interface Feedback {
  title: string
  category: string
  description: string
}

export type HandleFeedbackChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >,
  key: string,
) => void
