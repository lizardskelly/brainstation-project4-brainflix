import './videodetails.scss';

const VideoDetails = ({ details }) => {

  const { title, channel, timestamp, views, likes, description, comments } = details;

  const formattedDate = timestamp => {
    const timeNum = Number(timestamp);
    const date = new Date(timeNum);
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }

  return ( 
    <section className='details'>
      <h1 className='details__title'>{title}</h1>
      <div className='details__text-container'>
        <div className='details__text-container--display'>
          <h3 className='details__text details__text--color'>By {channel}</h3>
          <p className='details__text'>{formattedDate(timestamp)}</p>
        </div>
        <div className='details__text-container--display'>
          <div className='details__views'>
            <img className='details__icon'
              src='http://localhost:8000/images/views.svg'
              alt='views'/>
            <p className='details__text'>{views}</p>
          </div>
          <div className='details__likes'>
            <img className='details__icon'
              src='http://localhost:8000/images/likes.svg'
              alt='likes'/>
            <p className='details__text'>{likes}</p>
          </div>
        </div>
      </div>
      <p className='details__description'>{description}</p>
      <p className='details__comment-count'>{comments.length} Comments</p>
    </section>
  );
}

export default VideoDetails;