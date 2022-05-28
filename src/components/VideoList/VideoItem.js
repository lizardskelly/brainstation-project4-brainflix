const VideoItem = ({ title, channel, image: thumbnail }) => {
  return ( 
    <li className="video-item">
      <image className="video-item__thumbnail" src={thumbnail} alt="video thumbnail"/>
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