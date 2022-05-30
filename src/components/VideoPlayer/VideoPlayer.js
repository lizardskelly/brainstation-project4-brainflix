import './videoplayer.scss'

const VideoPlayer = ({ video }) => {
  const { image } = video;

  return ( 
    <section className='video'>
      <div className='video__container'>
        <div className='video__aspect-frame'>
          <video
            className='video__player'
            controls
            poster={image}>
          </video>
        </div>
      </div>
      
    </section>
   );
}

export default VideoPlayer;