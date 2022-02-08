import * as React from 'react'
import FeedbackForm from '@/components/feedback-form/FeedbackForm'
import {HandleFeedbackChange} from '@/types/types'
import {feedbackInitialState, feedbackReducer} from '@/utils/utils'

export default function FeedbackNew() {
  const [feedback, dispatch] = React.useReducer(
    feedbackReducer,
    feedbackInitialState,
  )

  const handleFeedbackChange: HandleFeedbackChange = (e, key) => {
    dispatch({type: key, payload: e.target.value})
  }

  const handleAddFeedback = (type: string) => {}

  // console.log(feedback)
  return (
    <FeedbackForm
      feedback={feedback}
      dispatch={dispatch}
      handleFeedbackChange={handleFeedbackChange}
      handleAddFeedback={handleAddFeedback}
    />
  )
}
