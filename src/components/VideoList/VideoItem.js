import './VideoItem.scss';

const VideoItem = ({ title, channel, image: thumbnail, id, onVideoItemClick }) => {
  return ( 
    <li onClick={() => onVideoItemClick(id)} className="video-item">
      <img className='video-item__thumbnail' alt='thumbnail' src={thumbnail}/>
      <div className="video-item__container">
        <p className="video-item__title">
          {title}
        </p>
        <p className="video-item__channel">
          {channel}
        </p>
      </div>
    </li>
   );
}
 
export default VideoItem;