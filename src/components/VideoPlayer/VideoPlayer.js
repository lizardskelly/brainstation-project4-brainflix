import './videoplayer.scss'

const VideoPlayer = ({ video }) => {
  const { image } = video;

  return ( 
    <section className='video'>
      <div className='video__container'>
        <video
          className='video__player'
          controls
          poster={image}>
        </video>
      </div>
    </section>
   );
}

export default VideoPlayer;