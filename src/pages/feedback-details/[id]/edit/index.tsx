import * as React from 'react'
import FeedbackForm from '@/components/feedback-form/FeedbackForm'
import {HandleFeedbackChange} from '@/types/types'
import {feedbackReducer} from '@/utils/utils'
import {GetServerSideProps} from 'next/types'
import {getFeedbacks} from '@/service/feedback'
import {useToast} from '@chakra-ui/react'
import {useRouter} from 'next/router'

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

  const toast = useToast()
  const router = useRouter()

  const handleFeedbackChange: HandleFeedbackChange = (e, key) => {
    dispatch({type: key, payload: e.target.value})
  }

  const handleEditFeedback = () => {
    toast({
      title: 'Successfully Edited! 🖊️',
      status: 'success',
      variant: 'subtle',
      position: 'top',
      duration: 5000,
      isClosable: true,
    })

    // edit feedback

    // dispatch({type: 'reset', payload: ''})
  }

  const handleDeleteFeedback = () => {
    toast({
      title: 'Successfully Deleted ❌',
      status: 'success',
      variant: 'subtle',
      position: 'top',
      duration: 3000,
      isClosable: true,
    })
    router.push('/')
  }

  return (
    <FeedbackForm
      feedback={feedback}
      dispatch={dispatch}
      handleFeedbackChange={handleFeedbackChange}
      handleEditFeedback={handleEditFeedback}
      isEdit
      title={suggestion.title}
      handleDeleteFeedback={handleDeleteFeedback}
    />
  )
}
