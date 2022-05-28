import { Component } from 'react';
import './App.scss';
import videoData from './data/video-details.json';
import videosListData from './data/videos.json';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoDetails from './components/VideoDetails/VideoDetails';
import CommentForm from './components/CommentForm/CommentForm';
import CommentList from './components/CommentList/CommentList';
import VideoList from './components/VideoList/VideoList';

class App extends Component {

  state = {
    currentVideo: videoData[0],
    videoList: videosListData
  }

  render() {
    const { currentVideo } = this.state

    return (
      <>
        <Header />
        <VideoPlayer 
          video = {currentVideo}
        />
        <VideoDetails 
          details = {currentVideo}
        />
        <CommentForm />
        <CommentList 
          comments = {currentVideo.comments}
        />
        <VideoList 
          videos = {this.state.videoList}
          currentVideoId = {currentVideo.id}
        />
      </>
    )
  }
}

export default App;
