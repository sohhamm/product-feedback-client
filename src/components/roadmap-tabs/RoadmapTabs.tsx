import * as React from 'react'
import RoadmapCardGroup from '@/components/ui/RoadmapCardGroup'
import {Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import {RoadmapDataProps} from '@/types/prop-types'

export default function RoadmapTabs({
  planned,
  inProgress,
  live,
}: RoadmapDataProps) {
  const [tabIndex, setTabIndex] = React.useState(0)
  return (
    <Tabs
      isFitted
      mx="-24px"
      onChange={index => setTabIndex(index)}
      colorScheme="purple"
    >
      <TabList
        pos="sticky"
        top="119px"
        fontSize={'13px'}
        zIndex={1}
        bg="#F2F2F2"
      >
        <Tab
          fontSize={'13px'}
          fontWeight={700}
          h="60px"
          color="navyBlue1.400"
          opacity={tabIndex === 0 ? 1 : 0.4}
        >
          Planned ({planned.length})
        </Tab>
        <Tab
          fontSize={'13px'}
          fontWeight={700}
          h="60px"
          color="navyBlue1.400"
          opacity={tabIndex === 1 ? 1 : 0.4}
        >
          In-Progress ({inProgress.length})
        </Tab>
        <Tab
          fontSize={'13px'}
          fontWeight={700}
          h="60px"
          color="navyBlue1.400"
          opacity={tabIndex === 2 ? 1 : 0.4}
        >
          Live ({live.length})
        </Tab>
      </TabList>

      <TabPanels px="12px">
        <TabPanel>
          <RoadmapCardGroup
            data={planned}
            title="Planned"
            subTitle="Ideas prioritized for research"
          />
        </TabPanel>
        <TabPanel>
          <RoadmapCardGroup
            data={inProgress}
            title="In-progress"
            subTitle="Currently being developed"
          />
        </TabPanel>
        <TabPanel>
          <RoadmapCardGroup
            data={live}
            title="Live"
            subTitle=" Released Feature"
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
