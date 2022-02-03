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
