import './videoplayer.scss'

const VideoPlayer = ({ video }) => {
  const { image } = video;

  return ( 
    <>
      <video
        className='video'
        controls
        poster={image}
      ></video>
    </>
   );
}

export default VideoPlayer;