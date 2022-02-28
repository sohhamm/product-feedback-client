import RoadmapCard from './RoadmapCard'
import {Box, Heading, Flex, Text} from '@chakra-ui/react'

interface RoadmapCardGroupProps {
  data: any[]
  title: string
  subTitle: string
}

export default function RoadmapCardGroup({
  data,
  title,
  subTitle,
}: RoadmapCardGroupProps) {
  return (
    <Box>
      <Heading
        as="h3"
        color="navyBlue2.400"
        fontSize={['18px', '14px', '18px']}
        mb="4px"
      >
        {title} ({data.length})
      </Heading>
      <Text
        fontSize={['14px', '14px', '16px']}
        mb={['24px', '24px', '32px']}
        color="darkGray.400"
      >
        {subTitle}
      </Text>

      <Flex direction={'column'} rowGap={['16px', '16px', '24px']}>
        {data.map((request: any) => (
          <RoadmapCard
            status={request.status}
            key={request.id}
            request={request}
            isMobile
          />
        ))}
      </Flex>
    </Box>
  )
}
