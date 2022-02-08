import {Feedback, HandleFeedbackChange} from '@/types/types'

export interface FeedbackFormProps {
  handleFeedbackChange: HandleFeedbackChange
  feedback: Feedback
  dispatch: React.Dispatch<{
    type: string
    payload: string
  }>
  handleAddFeedback: (type: string) => void
  handleDeleteFeedback?: () => void
  isEdit?: boolean | undefined
  title?: string
}
