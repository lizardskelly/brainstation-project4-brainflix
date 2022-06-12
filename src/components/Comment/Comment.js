import './Comment.scss';

const Comment = ({ name, comment: body, timestamp }) => {
  const formattedDate = timestamp => {
    const timeNum = Number(timestamp);
    const date = new Date(timeNum);
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }

  return ( 
    <li className="comment">
      <img className="comment__avatar" src='http://localhost:8000/images/placeholder.jpg' alt="user avatar"/>
      <div className="comment__container">
        <div className="comment__info">
          <p className="comment__name">
            {name}
          </p>
          <p className="comment__timestamp">
            {formattedDate(timestamp)}
          </p>
        </div>
        <p className="comment__body">
          {body}
        </p>
      </div>
    </li>
   );
}
 
export default Comment;