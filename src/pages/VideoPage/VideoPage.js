import { Component } from 'react';
import videoData from '../../data/video-details.json';
import videosListData from '../../data/videos.json'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentList from '../../components/CommentList/CommentList';
import VideoList from '../../components/VideoList/VideoList';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import './VideoPage.scss';



class VideoPage extends Component {
  state = { 
    nextVideos: videosListData,
    currentVideo: videoData[0]
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.videoId !== prevProps.match.params.videoId) {
      this.setState({
        currentVideo: videoData.find(video => video.id === this.props.match.params.videoId) || videoData[0]
      });
      window.scrollTo(0, 0);
    }
  }

  render() { 
    const { nextVideos, currentVideo } = this.state;

    return (
      <main>
        <VideoPlayer 
          video = {currentVideo}
        />
        <div className='display'>
          <div>
            <VideoDetails 
              details = {currentVideo}
            />
            <CommentForm />
            <CommentList 
              comments = {currentVideo.comments}
            />
          </div>
          <VideoList 
            videos = {nextVideos}
            currentVideoId = {currentVideo.id}
          />
        </div>
      </main>
    );
  }
}
 
export default VideoPage;