export interface Feedback {
  title: string
  category: string
  desc: string
  status?: string
}

export type HandleFeedbackChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >,
  key: string,
) => void
