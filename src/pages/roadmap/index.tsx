import * as React from 'react'
import Loader from '@/components/ui/Loader'
import RoadmapHeader from '@/components/roadmap-header/RoadmapHeader'
import RoadmapTabs from '@/components/roadmap-tabs/RoadmapTabs'
import RoadmapGrid from '@/components/roadmap-grid/RoadmapGrid'
import {GetServerSideProps} from 'next/types'
import {Box} from '@chakra-ui/react'
import {getFeedbacks} from '@/service/feedback'
import {useMediaQuerySSR} from '@/hooks/media-query-ssr'


export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getFeedbacks()
  const data = JSON.parse(JSON.stringify(res))
  const planned = data.productRequests.filter(
    (requests: any) => requests.status === 'planned',
  )
  const inProgress = data.productRequests.filter(
    (requests: any) => requests.status === 'in-progress',
  )
  const live = data.productRequests.filter(
    (requests: any) => requests.status === 'live',
  )
  return {
    props: {planned, inProgress, live},
  }
}

interface RoadmapProps {
  planned: any
  inProgress: any
  live: any
}

export default function Roadmap({planned, inProgress, live}: RoadmapProps) {
  const isMobile = useMediaQuerySSR(480)
  const isTablet = useMediaQuerySSR(767)
  const isMax = useMediaQuerySSR(4000)

  const didMediaQueryResolve = isMobile || isTablet || isMax

  if (!didMediaQueryResolve) return <Loader />

  return (
    <Box mt={['-94px', '0px']}>
      <RoadmapHeader isMobile={isMobile} />
      {isMobile ? (
        <RoadmapTabs planned={planned} inProgress={inProgress} live={live} />
      ) : (
        <RoadmapGrid planned={planned} inProgress={inProgress} live={live} />
      )}
    </Box>
  )
}
