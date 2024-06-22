import React from 'react'
import Comment from "./comment"
import { commentsData } from '@/comment-data'
const Comments = () => {
  return (
    <div>
        <Comment data={commentsData} />
    </div>
  )
}

export default Comments