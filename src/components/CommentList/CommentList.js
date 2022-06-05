import './CommentList.scss';
import Comment from '../Comment/Comment';

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
    <section>
      <ul className='comment-list'>
        {renderComments()}
      </ul>
    </section>
   );
}
 
export default CommentList;