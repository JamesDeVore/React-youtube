import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyCDHxEwzplSqxvsfDulPcBW9pM-Dis1N7E'
const axios = require('axios');

class App extends Component {

  constructor (){
    super()

    this.state = {
      videos:[],
      selectedVideo:null
    }
  }

  videoSearch = (term) => {
    const url = 'https://www.googleapis.com/youtube/v3/search'
    const params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video'
    };

    axios.get(url, {params})
      .then(response => {
        this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
        // this.setVideos(this.parseVideos(response))
      })
      .catch(error=>console.error(error))
  }

  // setVideos = (videoArray) => {
  //   this.setState({videos:videoArray});
  //   this.setState({selectedVideo:videoArray[0]})
  // }
  //
  // parseVideos = (responseData) => {
  //   let videos = responseData.data.items
  //   let parsedVideos =  videos.map(video => {
  //        return {
  //           videoId:video.id.videoId,
  //           title:video.snippet.title,
  //           thumbUrl:video.snippet.thumbnails.default.url,
  //           description:video.snippet.description
  //           }
  //         }
  //     );
  //   return parsedVideos
  // }

  render () {
    return (
      <div>
        <SearchBar onSearchTermChange={this.videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
      </div>
    )
  }
}





ReactDOM.render(<App />, document.getElementById('root'));
