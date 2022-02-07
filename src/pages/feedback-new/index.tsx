import * as React from 'react'
import Btn from '@/components/ui/Btn'
import LeftIcon from '/public/assets/shared/icon-arrow-left.svg'
import {
  Box,
  Flex,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import {tagsObj} from '@/constants/constants'

export default function FeedbackNew() {
  const router = useRouter()
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
        <Heading mb="40px" fontSize={['24px']} color="navyBlue2.400">
          Create New Feedback
        </Heading>

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
            />
          </Box>

          <Flex justify={'flex-end'}>
            <Btn
              colorScheme="navyBlue2"
              hoverColor="#656EA3"
              onClick={() => router.push('/')}
              props={{w: 'auto', mr: '16px'}}
            >
              Cancel
            </Btn>

            <Btn
              hoverColor="#C75AF6"
              onClick={() => router.push('/')}
              props={{w: 'auto'}}
            >
              Add Feedback
            </Btn>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
