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
    nextVideos: videosListData
  }

  selectVideo = (id) => {
    this.setState({
      currentVideo: videoData.find(video => video.id === id)
    });
    window.scrollTo(0, 0);
  }

  render() {
    const { currentVideo, nextVideos } = this.state

    return (
      <>
        <Header />
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
              onVideoItemClick = {this.selectVideo}
            />
          </div>
        </main>
      </>
    )
  }
}

export default App;
