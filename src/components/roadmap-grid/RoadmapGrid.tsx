import RoadmapCardGroup from '../ui/RoadmapCardGroup'
import {SimpleGrid} from '@chakra-ui/react'
import {RoadmapDataProps} from '@/types/prop-types'

export default function RoadmapGrid({
  planned,
  inProgress,
  live,
}: RoadmapDataProps) {
  return (
    <SimpleGrid
      as="main"
      templateColumns={'repeat(3,1fr)'}
      gap={['10px', '10px', '30px']}
      mt={['32px', '32px', '48px']}
    >
      <RoadmapCardGroup
        data={planned}
        title="Planned"
        subTitle="Ideas prioritized for research"
      />

      <RoadmapCardGroup
        data={inProgress}
        title="In-progress"
        subTitle="Currently being developed"
      />

      <RoadmapCardGroup data={live} title="Live" subTitle=" Released Feature" />
    </SimpleGrid>
  )
}
