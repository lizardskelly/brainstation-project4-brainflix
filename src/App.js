import { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import VideoPage from './pages/VideoPage/VideoPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={VideoPage} />
          <Route path='/video/:videoId' component={VideoPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
