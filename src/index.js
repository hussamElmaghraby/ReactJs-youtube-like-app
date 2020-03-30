import _ from 'lodash';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_details";
const API_KEY = "AIzaSyA4wGZx5FWwj3O49GhkGRkom2qSSm5SX64";

// create a new component  ..
class App extends Component {
   
    constructor(props){
        super(props);
        this.state= {
            videos :[],
            selectedVideo : null
        }
       this.videoSearch('zamalek')

      }
    videoSearch(term){
       YTSearch({ key: API_KEY, term: term }, (videos) =>{
            // this.setState({video :video}) only work when it has the same variable name ..
            this.setState({
              videos : videos,
              selectedVideo : videos[0]
            })
          });
    }
    
    

  render (){
    //only be called in every 300 milliseconds 
    const videoSearch = _.debounce(term => {this.videoSearch(term)} , 300);
      return(
    <div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail  video={this.state.selectedVideo} />
      <VideoList
      // when this method runs it the selectedVideo List will be updated
      onVideoSelect = {selectedVideo =>  this.setState({selectedVideo})}
      videos={this.state.videos}/>
    </div>
  );
  }
};
// take this component generated and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
