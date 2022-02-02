import {Heading} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import React from 'react'
import Layout from '../../../layout/Layout'

export default function FeedbackDetails() {
  const {id} = useRouter().query
  return (
    <Layout>
      <Heading>Feedback Details for {id}</Heading>
    </Layout>
  )
}
