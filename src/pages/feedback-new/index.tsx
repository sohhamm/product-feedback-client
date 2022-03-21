import * as React from 'react'
import FeedbackForm from '@/components/feedback-form/FeedbackForm'
import {HandleFeedbackChange} from '@/types/types'
import {useToast} from '@chakra-ui/react'
import {feedbackInitialState, feedbackReducer} from '@/utils/utils'
import {useDataStore} from '@/store/data'

export default function FeedbackNew() {
  const [feedback, dispatch] = React.useReducer(
    feedbackReducer,
    feedbackInitialState,
  )
  const setSuggestions = useDataStore(state => state.setSuggestions)
  const suggestions = useDataStore(state => state.suggestions)

  console.log(suggestions)

  const toast = useToast()

  const handleFeedbackChange: HandleFeedbackChange = (e, key) => {
    dispatch({type: key, payload: e.target.value})
  }

  const handleAddFeedback = () => {
    // TODO create feedback
    setSuggestions((oldSuggestions: any) => {
      const lastID = oldSuggestions[oldSuggestions.length - 1].id
      return [
        ...oldSuggestions,
        {
          id: lastID + 1,
          title: feedback.title,
          category: feedback.category,
          upvotes: 0,
          status: 'suggestion',
          description: feedback.desc,
          comments: null,
        },
      ]
    })

    toast({
      title: 'Feedback submitted! 🥳',
      status: 'success',
      variant: 'subtle',
      position: 'top',
      duration: 5000,
      isClosable: true,
    })

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
