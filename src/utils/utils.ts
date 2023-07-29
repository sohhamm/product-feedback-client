import {Feedback, TStatus} from '@/types/types'

export const sorter = (a: any, b: any, activeSort: string) => {
  switch (activeSort) {
    case 'Most Upvotes':
      return a.upvotes >= b.upvotes ? -1 : 1
    case 'Least Upvotes':
      return a.upvotes >= b.upvotes ? 1 : -1
    case 'Most Comments':
      if (!a.comments) return 1
      if (!b.comments) return -1
      return a.comments.length >= b.comments.length ? -1 : 1
    case 'Least Comments':
      if (!a.comments) return -1
      if (!b.comments) return 1
      return a.comments.length >= b.comments.length ? 1 : -1
  }
}

export const feedbackInitialState = {
  title: '',
  category: 'FEATURE',
  desc: '',
}

export const feedbackReducer = (
  state: Feedback,
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
      return {...feedbackInitialState}
    default:
      throw new Error(`unhandled action type`)
  }
}

export const handleAddFeedback = (type: string) => {}

export const getColor = (status: TStatus) => {
  switch (status) {
    case 'planned':
      return 'orange.400'
    case 'in-progress':
      return 'purple.400'
    case 'live':
      return 'lightBlue.400'
  }
}

export const isProd = process.env.NODE_ENV === 'production'
