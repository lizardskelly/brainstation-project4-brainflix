import './videoplayer.scss'

const VideoPlayer = ({ video }) => {
  const { image } = video;

  return ( 
    <section className='video'>
      <video
        className='video__player'
        controls
        poster={image}>
      </video>
    </section>
   );
}

export default VideoPlayer;