import { Component } from 'react';
import './App.scss';
import videoData from './data/video-details.json';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoDetails from './components/VideoDetails/VideoDetails';

class App extends Component {

  state = {
    currentVideo: videoData[0]
  }

  render() {
    return (
      <>
        <Header />
        <VideoPlayer 
          video = {this.state.currentVideo}
        />
        <VideoDetails 
          details = {this.state.currentVideo}
        />
      </>
    )
  }
}

export default App;
