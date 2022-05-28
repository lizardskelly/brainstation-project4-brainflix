import './CommentList.scss';
import Comment from './Comment';

const CommentList = ({ comments }) => {

  const renderComments = () => {
    return comments.map(comment => {
      return (
        <Comment
          {...comment}
          key = {comment.name + comment.timestamp}
        />
      )
    })
  }

  return ( 
    <ul className='comment-list'>
      {renderComments()}
    </ul>
   );
}
 
export default CommentList;