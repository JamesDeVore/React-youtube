import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
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

  const videoSearch = (term) => {
    const url = 'https://www.googleapis.com/youtube/v3/search'
    const params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video'
    };

    axios.get(url, {params})
      .then(response => {
        console.log(response)
      })
      .catch(error=>console.error(error))
  }

  return (
    <SearchBar onSearchTermChange={videoSearch} />
  )
}





ReactDOM.render(<App />, document.getElementById('root'));
