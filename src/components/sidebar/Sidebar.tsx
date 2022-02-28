import * as React from 'react'
import Filters from '../filters/Filters'
import RoadmapSummary from '../roadmap-summary/RoadmapSummary'
import ProductCard from '../product-card/ProductCard'
import {Flex} from '@chakra-ui/react'

export default function Sidebar() {
  return (
    <Flex flexDir={['row', 'row', 'column']} rowGap={'24px'} columnGap="10px">
      <ProductCard />
      <Filters />
      <RoadmapSummary />
    </Flex>
  )
}
