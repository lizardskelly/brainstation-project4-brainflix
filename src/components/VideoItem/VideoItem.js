import './VideoItem.scss';
import { Link } from 'react-router-dom';

const VideoItem = ({ title, channel, image: thumbnail, id }) => {
  return ( 
    <Link to={`/video/${id}`}>
      <li className="video-item">
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
    </Link>
  );
}
 
export default VideoItem;