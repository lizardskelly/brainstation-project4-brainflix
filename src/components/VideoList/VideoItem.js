import './VideoItem.scss';

const VideoItem = ({ title, channel, image: thumbnail, id, onVideoItemClick }) => {
  return ( 
    <li onClick={() => onVideoItemClick(id)} className="video-item">
      <div 
        className="video-item__thumbnail" 
        style={{backgroundImage: `url(${thumbnail})`}}
        alt="video thumbnail"
      />
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