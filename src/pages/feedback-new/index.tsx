import * as React from 'react'
import FeedbackForm from '@/components/feedback-form/FeedbackForm'
import {Feedback, HandleFeedbackChange} from '@/types/types'

const feedbackInitialState = {
  title: '',
  category: 'FEATURE',
  desc: '',
}

const feedbackReducer = (
  state: Feedback,
  action: {type: string; payload: string},
) => {
  switch (action.type) {
    case 'title':
      return {...state, title: action.payload}
    case 'category':
      return {...state, category: action.payload}
    case 'desc':
      return {...state, desc: action.payload}
    case 'reset':
      return {...feedbackInitialState}
    default:
      throw new Error(`unhandled action type`)
  }
}

export default function FeedbackNew() {
  const [feedback, dispatch] = React.useReducer(
    feedbackReducer,
    feedbackInitialState,
  )

  const handleFeedbackChange: HandleFeedbackChange = (e, key) => {
    dispatch({type: key, payload: e.target.value})
  }

  const handleAddFeedback = (type: string) => {}

  return (
    <FeedbackForm
      feedback={feedback}
      dispatch={dispatch}
      handleFeedbackChange={handleFeedbackChange}
      handleAddFeedback={handleAddFeedback}
    />
  )
}
