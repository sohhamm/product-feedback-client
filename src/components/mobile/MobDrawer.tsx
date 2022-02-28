import Filters from '@/components/filters/Filters'
import RoadmapSummary from '@/components/roadmap-summary/RoadmapSummary'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'

interface MobDrawerProps {
  isOpen: boolean
  onClose: () => void
  btnRef: React.MutableRefObject<any>
}

export default function MobDrawer({isOpen, onClose, btnRef}: MobDrawerProps) {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="xs"
    >
      <DrawerOverlay mt="72px" />

      <DrawerContent mt="71.5px" bg="#F7F8FD">
        <DrawerBody
          display={'flex'}
          flexDir="column"
          alignItems="center"
          rowGap={'24px'}
          mt="24px"
        >
          <Filters onClose={onClose} />

          <RoadmapSummary />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
