import {Fragment} from 'react'
import {useUIStore} from '../../store/ui'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Image,
  Button,
  Text,
  Flex,
} from '@chakra-ui/react'
import DownIcon from '../../../public/assets/shared/icon-arrow-down.svg'
import UpIcon from '../../../public/assets/shared/icon-arrow-up.svg'
import CheckIcon from '../../../public/assets/shared/icon-check.svg'

export default function SortMenu() {
  const activeSort = useUIStore(state => state.activeSort)
  const setActiveSort = useUIStore(state => state.setActiveSort)
  return (
    <Menu isLazy>
      {({isOpen}) => (
        <>
          <MenuButton
            as={Button}
            rightIcon={
              <Image
                src={isOpen ? UpIcon.src : DownIcon.src}
                alt="arrow"
                color="white"
              />
            }
            colorScheme="navyBlue1.400"
            fontSize="14px"
          >
            <Flex>
              <Text color={'lightGray'} opacity={0.75} fontWeight={'normal'}>
                Sort by :
              </Text>
              <Text color={'lightGray'} fontWeight={'bold'} ml="5px">
                {activeSort}
              </Text>
            </Flex>
          </MenuButton>
          <MenuList fontSize="16px" color="darkGray.400" w="255px" mt="16px">
            {items.map(item => (
              <Fragment key={item}>
                <MenuItem
                  onClick={() => setActiveSort(item)}
                  _hover={{color: 'purple'}}
                >
                  {item}
                  {activeSort === item && (
                    <Image src={CheckIcon.src} alt="check" ml="auto" />
                  )}
                </MenuItem>
                <MenuDivider />
              </Fragment>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  )
}

const items = [
  'Most Upvotes',
  'Least Upvotes',
  'Most Comments',
  'Least Comments',
]
