import './commentform.scss'

const CommentForm = () => {
  return ( 
    <form className="form">
      <img
        className='form__avatar'
        src='http://localhost:8000/images/Mohan-muruge.jpg'
        alt='user avatar'/>
      <div className='form__container'>
        <div className='form__input-container'>
          <label
            className='form__label'
            htmlFor='commentInput'>
            JOIN THE CONVERSATION
          </label>
          <input
            className='form__input'
            id='commentInput'
            placeholder='Add a new comment'/>
        </div>
        <button
          onClick={(event) => event.preventDefault()}
          className='form__button'>
          COMMENT
        </button>
      </div>
    </form>
   );
}
 
export default CommentForm;