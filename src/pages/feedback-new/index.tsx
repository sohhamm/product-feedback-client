import * as React from 'react'
import FeedbackForm from '@/components/feedback-form/FeedbackForm'
import {HandleFeedbackChange} from '@/types/types'
import {useToast} from '@chakra-ui/react'
import {feedbackInitialState, feedbackReducer} from '@/utils/utils'

export default function FeedbackNew() {
  const [feedback, dispatch] = React.useReducer(
    feedbackReducer,
    feedbackInitialState,
  )

  const toast = useToast()

  const handleFeedbackChange: HandleFeedbackChange = (e, key) => {
    dispatch({type: key, payload: e.target.value})
  }

  const handleAddFeedback = () => {
    toast({
      title: 'Feedback submitted! 🥳',
      status: 'success',
      variant: 'subtle',
      position: 'top',
      duration: 5000,
      isClosable: true,
    })

    // create feedback

    dispatch({type: 'reset', payload: ''})
  }

  return (
    <FeedbackForm
      feedback={feedback}
      dispatch={dispatch}
      handleFeedbackChange={handleFeedbackChange}
      handleAddFeedback={handleAddFeedback}
    />
  )
}
