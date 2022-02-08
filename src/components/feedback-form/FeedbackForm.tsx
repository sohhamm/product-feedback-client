import * as React from 'react'
import {useRouter} from 'next/router'
import Btn from '@/components/ui/Btn'
import LeftIcon from '/public/assets/shared/icon-arrow-left.svg'
import NewIcon from '/public/assets/shared/icon-new-feedback.svg'
import EditIcon from '/public/assets/shared/icon-edit-feedback.svg'
import {
  Box,
  Heading,
  FormControl,
  Flex,
  Input,
  Select,
  Textarea,
  Image,
  Text,
} from '@chakra-ui/react'
import {statusObj, tagsObj} from '@/constants/constants'
import {FeedbackFormProps} from '@/types/prop-types'

export default function FeedbackForm({
  handleFeedbackChange,
  feedback,
  dispatch,
  handleAddFeedback,
  isEdit,
  title,
  handleDeleteFeedback,
}: FeedbackFormProps) {
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
        <Image
          src={isEdit ? EditIcon.src : NewIcon.src}
          alt="add"
          w="56px"
          h="56px"
          top={-6}
          position="absolute"
          left={10}
        />
        <Heading mb="40px" fontSize={['24px']} color="navyBlue2.400">
          {isEdit ? `Editing '${title}'` : 'Create New Feedback'}
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

            {isEdit && (
              <Box>
                <Heading
                  as="h4"
                  mb="2px"
                  fontSize={'14px'}
                  color="navyBlue2.400"
                >
                  Update Status
                </Heading>
                <Text mb="16px">Change feedback status</Text>
                <Select
                  variant="filled"
                  bg="#F7F8FD"
                  borderRadius="5px"
                  focusBorderColor="darkBlue.400"
                  value={feedback.status}
                  onChange={e => handleFeedbackChange(e, 'status')}
                >
                  {statusObj.map(status => (
                    <option value={status.value} key={status.value}>
                      {status.display}
                    </option>
                  ))}
                </Select>
              </Box>
            )}

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

            <Flex justify={'space-between'} mt="8px">
              {isEdit && (
                <Btn
                  colorScheme="red"
                  hoverColor="orange.400"
                  onClick={handleDeleteFeedback}
                  props={{w: 'auto'}}
                >
                  Delete
                </Btn>
              )}

              <Flex>
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
                  onClick={() => handleAddFeedback(isEdit ? 'edit' : 'add')}
                  props={{w: 'auto'}}
                >
                  {isEdit ? 'Save Changes' : 'Add Feedback'}
                </Btn>
              </Flex>
            </Flex>
          </Flex>
        </FormControl>
      </Box>
    </Box>
  )
}
