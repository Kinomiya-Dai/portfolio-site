import Link from 'next/link'
import { formatDate } from 'app/blog/sync-utils'
import { getBlogPosts } from 'app/blog/utils'
import DisplayPosts from './displayPosts'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <DisplayPosts allBlogs={allBlogs} />
  )
}
