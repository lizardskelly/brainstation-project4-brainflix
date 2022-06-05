import VideoItem from "../VideoItem/VideoItem";
import './VideoList.scss';

const VideoList = ({ videos, currentVideoId }) => {
  return ( 
    <section className="video-list">
      <h3 className="video-list__title">NEXT VIDEOS</h3>
      <ul className='video-list__container'>
        {
          videos.filter(video => {
            return video.id !== currentVideoId
          }).map(video => (
            <VideoItem
              key={video.id}
              {...video}
            />
          ))
        }
      </ul>
    </section>
  );
}
 
export default VideoList;