import { Component } from 'react';
import './App.scss';
import PageHeader from './components/Header/PageHeader';
import VideoPage from './pages/VideoPage/VideoPage';
import UploadPage from './pages/UploadPage/UploadPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <PageHeader />
        <Switch>
          <Route path='/' exact component={VideoPage} />
          <Route path='/video/:videoId' component={VideoPage} />
          <Route path='/upload' component={UploadPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
