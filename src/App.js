import { Component } from 'react';
import './App.scss';
import videoDetails from './data/video-details.json';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

class App extends Component {

  state = {
    currentVideo: videoDetails[0]
  }

  render() {
    return (
      <>
        <Header />
        <VideoPlayer 
          video = {this.state.currentVideo}
        />
      </>
    )
  }
}

export default App;
