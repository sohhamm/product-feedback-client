import * as React from 'react'
import FeedbackForm from '@/components/feedback-form/FeedbackForm'
import {HandleFeedbackChange} from '@/types/types'
import {feedbackInitialState, feedbackReducer} from '@/utils/utils'
import {GetServerSideProps} from 'next/types'
import {getFeedbacks} from '@/service/feedback'

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const _res = await getFeedbacks()
  const res = _res.productRequests.filter(s => s.id === Number(params?.id))[0]
  const data = JSON.parse(JSON.stringify(res))
  return {
    props: {suggestion: data},
  }
}

export default function FeedbackEdit({suggestion}: {suggestion: any}) {
  const [feedback, dispatch] = React.useReducer(feedbackReducer, {
    title: suggestion.title,
    desc: suggestion.description,
    category: suggestion.category,
    status: suggestion.status,
  })

  const handleFeedbackChange: HandleFeedbackChange = (e, key) => {
    dispatch({type: key, payload: e.target.value})
  }

  const handleAddFeedback = () => {}

  const handleDeleteFeedback = () => {}

  return (
    <FeedbackForm
      feedback={feedback}
      dispatch={dispatch}
      handleFeedbackChange={handleFeedbackChange}
      handleAddFeedback={handleAddFeedback}
      isEdit
      title={suggestion.title}
      handleDeleteFeedback={handleDeleteFeedback}
    />
  )
}
