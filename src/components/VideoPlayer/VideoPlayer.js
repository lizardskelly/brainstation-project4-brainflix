const VideoPlayer = ({ video }) => {
  const { image } = video;

  return ( 
    <>
      <video
        controls
        poster={image}
      ></video>
    </>
   );
}

export default VideoPlayer;