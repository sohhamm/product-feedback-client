import SuggestionCard from '@/components/ui/SuggestionCard'
import AddComment from '@/components/add-comment/AddComment'
import Comments from '@/components/comments/Comments'
import Btn from '@/components/ui/Btn'
import LeftIcon from '/public/assets/shared/icon-arrow-left.svg'
import {Flex} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import {GetServerSideProps} from 'next/types'
import {getFeedbacks} from '@/service/feedback'
import {useMediaQuerySSR} from '@/hooks/media-query-ssr'

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const _res = await getFeedbacks()
  const res = _res.productRequests.filter(s => s.id === Number(params?.id))[0]
  const data = JSON.parse(JSON.stringify(res))
  return {
    props: {suggestion: data},
  }
}

export default function FeedbackDetails({suggestion}: {suggestion: any}) {
  const isMobile = useMediaQuerySSR(480)
  const router = useRouter()
  const {id} = router.query

  return (
    <Flex direction={'column'} rowGap="24px" mt={['-60px', '0px']}>
      <Flex justify={'space-between'}>
        <Btn
          src={LeftIcon.src}
          variant="link"
          color="darkGray.400"
          onClick={() => router.push('/')}
          props={{w: 'auto'}}
          iconProps={{mr: '15px'}}
          isMobile={isMobile}
        >
          Go Back
        </Btn>
        <Btn
          colorScheme="darkBlue"
          onClick={() => router.push(`/feedback-details/${id}/edit`)}
          isMobile={isMobile}
        >
          Edit Feedback
        </Btn>
      </Flex>

      <SuggestionCard suggestion={suggestion} isViewOnly isMobile={isMobile} />

      {suggestion.comments && (
        <Comments comments={suggestion.comments} isMobile={isMobile} />
      )}

      <AddComment />
    </Flex>
  )
}
