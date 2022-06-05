import './CommentList.scss';
import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => {
  return ( 
    <section>
      <ul className='comment-list'>
        {comments.map(comment => {
          return (
            <Comment
              {...comment}
              key={comment.name + comment.timestamp}
            />
          )
        })}
      </ul>
    </section>
  );
}
 
export default CommentList;