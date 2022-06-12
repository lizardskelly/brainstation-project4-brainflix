import React, { Component } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentList from '../../components/CommentList/CommentList';
import VideoList from '../../components/VideoList/VideoList';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import './VideoPage.scss';
import axios from 'axios';

const serverHost = 'http://localhost:8000';
class VideoPage extends Component {
  state = { 
    videoList: [],
    currentVideo: undefined
  }

  retrieveVideoList() {
    return axios.get(`${serverHost}/videos`)
      .catch(error => {
        console.error(error.message)
      })
  }

  retrieveVideoDetails(id) {
    axios.get(`${serverHost}/videos/${id}`)
      .then(details => {
        this.setState({
          currentVideo: details.data
        })
      }).catch(error => {
        console.error(error.message)
      })
  }

  componentDidMount() {
    this.retrieveVideoList().then(response => {
      this.setState({
        videoList: response.data
      })
      const videoId = this.props.match.params.videoId || response.data[0].id;
      this.retrieveVideoDetails(videoId);
    })
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.videoId !== prevProps.match.params.videoId) {
      const videoId = this.props.match.params.videoId || this.state.videoList[0].id;
      this.retrieveVideoDetails(videoId);
      window.scrollTo(0, 0);
    }
  }

  render() { 
    const { videoList, currentVideo } = this.state;

    if(!currentVideo) {
      return <main className='loading'>Loading</main>
    }

    return (
      <main>
        <VideoPlayer 
          video={currentVideo}
        />
        <div className='display'>
          <div>
            <VideoDetails 
              details={currentVideo}
            />
            <CommentForm />
            <CommentList 
              comments={currentVideo.comments}
            />
          </div>
          <VideoList 
            videos={videoList}
            currentVideoId={currentVideo.id}
          />
        </div>
      </main>
    );
  }
}
 
export default VideoPage;