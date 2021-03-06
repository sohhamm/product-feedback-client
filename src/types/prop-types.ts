import {Feedback, HandleFeedbackChange} from '@/types/types'

export interface FeedbackFormProps {
  handleFeedbackChange: HandleFeedbackChange
  feedback: Feedback
  dispatch: React.Dispatch<{
    type: string
    payload: string
  }>
  handleAddFeedback?: () => void
  handleEditFeedback?: () => void
  handleDeleteFeedback?: () => void
  isEdit?: boolean | undefined
  title?: string
}

export interface RoadmapDataProps {
  planned: any[]
  inProgress: any[]
  live: any[]
}
