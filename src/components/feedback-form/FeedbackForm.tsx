import * as React from 'react'
import Btn from '@/components/ui/Btn'
import LeftIcon from '/public/assets/shared/icon-arrow-left.svg'
import NewIcon from '/public/assets/shared/icon-new-feedback.svg'
import EditIcon from '/public/assets/shared/icon-edit-feedback.svg'
import {useRouter} from 'next/router'
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
  const {id} = router.query

  return (
    <Box maxW="540px" mx="auto" mt={['-60px', '0px']}>
      <Btn
        src={LeftIcon.src}
        variant="link"
        color="darkGray.400"
        onClick={() =>
          isEdit ? router.push(`/feedback-details/${id}`) : router.push('/')
        }
        props={{w: 'auto'}}
        iconProps={{mr: '15px'}}
        mb={['35px', '40px']}
      >
        Go Back
      </Btn>

      <Box
        bg="white"
        borderRadius={'10px'}
        position={'relative'}
        px={['24px', '42px']}
        pb={['24px', '40px']}
        pt={['44px', '52px']}
      >
        <Image
          src={isEdit ? EditIcon.src : NewIcon.src}
          alt="add"
          w={['40px', '56px']}
          h={['40px', '56px']}
          top={[-4, -6]}
          position="absolute"
          left={[5, 10]}
        />
        <Heading
          mb={['24px', '40px']}
          fontSize={['18px', '24px']}
          color="navyBlue2.400"
        >
          {isEdit ? `Editing '${title}'` : 'Create New Feedback'}
        </Heading>
        <FormControl>
          <Flex direction="column" rowGap={'24px'} fontSize={['13px', '14px']}>
            <Box>
              <Heading
                color="navyBlue2.400"
                as="h4"
                mb="2px"
                fontSize={['13px', '14px']}
              >
                Feedback Title
              </Heading>
              <Text mb="16px" opacity={0.6}>
                Add a short, descriptive headline
              </Text>
              <Input
                bg="#F7F8FD"
                borderRadius="5px"
                focusBorderColor="darkBlue.400"
                value={feedback.title}
                onChange={e => handleFeedbackChange(e, 'title')}
                fontSize={['13px', '14px']}
              />
            </Box>

            <Box>
              <Heading
                as="h4"
                mb="2px"
                fontSize={['13px', '14px']}
                color="navyBlue2.400"
              >
                Category
              </Heading>
              <Text mb="16px" opacity={0.6}>
                Choose a category for your feedback
              </Text>
              <Select
                variant="filled"
                bg="#F7F8FD"
                borderRadius="5px"
                focusBorderColor="darkBlue.400"
                value={feedback.category}
                onChange={e => handleFeedbackChange(e, 'category')}
                fontSize={['13px', '14px']}
                name="category"
                // color="darkGray.400"
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
                  fontSize={['13px', '14px']}
                  color="navyBlue2.400"
                >
                  Update Status
                </Heading>
                <Text mb="16px" opacity={0.6}>
                  Change feedback status
                </Text>
                <Select
                  variant="filled"
                  bg="#F7F8FD"
                  borderRadius="5px"
                  focusBorderColor="darkBlue.400"
                  value={feedback.status}
                  onChange={e => handleFeedbackChange(e, 'status')}
                  fontSize={['13px', '14px']}
                  name="feedback-status"
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
              <Heading
                as="h4"
                mb="2px"
                fontSize={['13px', '14px']}
                color="navyBlue2.400"
              >
                Feedback Details
              </Heading>
              <Text mb="16px" opacity={0.6}>
                Include any specific comments on what should be improved, added,
                etc.
              </Text>
              <Textarea
                bg="#F7F8FD"
                borderRadius="5px"
                focusBorderColor="darkBlue.400"
                value={feedback.desc}
                onChange={e => handleFeedbackChange(e, 'desc')}
                fontSize={['13px', '14px']}
              />
            </Box>

            <Flex
              justify={['', isEdit ? 'space-between' : 'flex-end']}
              direction={['column', 'row']}
              mt="8px"
              rowGap={['16px', '0px']}
            >
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

              <Flex
                direction={['column', 'row']}
                rowGap={['16px', '0px']}
                columnGap={['0px', '16px']}
                order={[-1, 1]}
              >
                <Btn
                  colorScheme="navyBlue2"
                  hoverColor="#656EA3"
                  onClick={() => dispatch({type: 'reset', payload: ''})}
                  props={{w: 'auto'}}
                >
                  Cancel
                </Btn>

                <Btn
                  hoverColor="#C75AF6"
                  onClick={() => handleAddFeedback(isEdit ? 'edit' : 'add')}
                  props={{w: 'auto'}}
                  order={[-1, 1]}
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
