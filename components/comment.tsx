import React from "react";

import { CommentI } from "@/comment-data";

interface CommentProps{
    data:CommentI[]
}

const Comment = ({data}:CommentProps) => {
  return (
    <div>
      {data.map((comment, index) => (
        <div
          className="m-2 bg-slate-400 border-2  border-amber-400 p-3 rounded-xl w-[70%]"
          key={index}
        >
          <div className="flex items-center  justify-between">
            <img
              src={comment.profilePic}
              alt="user"
              className="w-10 h-10 rounded-full"
              loading="lazy"
            />
            <span>{comment.author}</span>
          </div>
          <div className="m-3">
            <p>{comment.content}</p>
            <span className="text-xs">{comment.timestamp}</span>
          </div>

            <div> { comment.replies && <Comment data={comment.replies}/>}</div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
