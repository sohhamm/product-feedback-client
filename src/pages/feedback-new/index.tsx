import * as React from 'react'
import Btn from '@/components/ui/Btn'
import LeftIcon from '/public/assets/shared/icon-arrow-left.svg'
import PlusIcon from '/public/assets/shared/icon-plus.svg'
import {
  Box,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import {tagsObj} from '@/constants/constants'
import {HandleFeedbackChange} from '@/types/types'

export default function FeedbackNew() {
  const [feedback, dispatch] = React.useReducer(reducer, initialState)
  const router = useRouter()

  const handleFeedbackChange: HandleFeedbackChange = (e, key) => {
    dispatch({type: key, payload: e.target.value})
  }

  const handleAddFeedback = () => {}

  // console.log(feedback)
  return (
    <Box maxW="540px" mx="auto">
      <Btn
        src={LeftIcon.src}
        variant="link"
        color="darkGray.400"
        onClick={() => router.push('/')}
        props={{w: 'auto'}}
        iconProps={{mr: '15px'}}
        mb="40px"
      >
        Go Back
      </Btn>

      <Box
        bg="white"
        borderRadius={'10px'}
        position={'relative'}
        px="42px"
        pb="40px"
        pt="52px"
      >
        <Box
          bg="radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)"
          w="56px"
          h="56px"
          position="absolute"
          borderRadius={'50%'}
          top={-6}
          left={10}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Image src={PlusIcon.src} alt="add" boxSize={'20px'} />
        </Box>
        <Heading mb="40px" fontSize={['24px']} color="navyBlue2.400">
          Create New Feedback
        </Heading>
        <FormControl>
          <Flex direction="column" rowGap={'24px'} fontSize={'14px'}>
            <Box>
              <Heading color="navyBlue2.400" as="h4" mb="2px" fontSize={'14px'}>
                Feedback Title
              </Heading>
              <Text mb="16px">Add a short, descriptive headline</Text>
              <Input
                bg="#F7F8FD"
                borderRadius="5px"
                focusBorderColor="darkBlue.400"
                value={feedback.title}
                onChange={e => handleFeedbackChange(e, 'title')}
              />
            </Box>

            <Box>
              <Heading as="h4" mb="2px" fontSize={'14px'} color="navyBlue2.400">
                Category
              </Heading>
              <Text mb="16px">Choose a category for your feedback</Text>
              <Select
                variant="filled"
                bg="#F7F8FD"
                borderRadius="5px"
                focusBorderColor="darkBlue.400"
                value={feedback.category}
                onChange={e => handleFeedbackChange(e, 'category')}
              >
                {tagsObj.map(tag => (
                  <option value={tag.value} key={tag.value}>
                    {tag.display}
                  </option>
                ))}
              </Select>
            </Box>

            <Box>
              <Heading as="h4" mb="2px" fontSize={'14px'} color="navyBlue2.400">
                Feedback Details
              </Heading>
              <Text mb="16px">
                Include any specific comments on what should be improved, added,
                etc.
              </Text>
              <Textarea
                bg="#F7F8FD"
                borderRadius="5px"
                focusBorderColor="darkBlue.400"
                value={feedback.desc}
                onChange={e => handleFeedbackChange(e, 'desc')}
              />
            </Box>

            <Flex justify={'flex-end'}>
              <Btn
                colorScheme="navyBlue2"
                hoverColor="#656EA3"
                onClick={() => dispatch({type: 'reset', payload: ''})}
                props={{w: 'auto', mr: '16px'}}
              >
                Cancel
              </Btn>

              <Btn
                hoverColor="#C75AF6"
                onClick={handleAddFeedback}
                props={{w: 'auto'}}
              >
                Add Feedback
              </Btn>
            </Flex>
          </Flex>
        </FormControl>
      </Box>
    </Box>
  )
}

const initialState = {
  title: '',
  category: 'FEATURE',
  desc: '',
}

const reducer = (
  state: typeof initialState,
  action: {type: string; payload: string},
) => {
  switch (action.type) {
    case 'title':
      return {...state, title: action.payload}
    case 'category':
      return {...state, category: action.payload}
    case 'desc':
      return {...state, desc: action.payload}
    case 'reset':
      return {...initialState}
    default:
      throw new Error(`unhandled action type`)
  }
}
