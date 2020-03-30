import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {
   const videoItems = props.videos.map(video=>{
        return (< VideoListItem 
          onVideoSelect11 = {props.onVideoSelect}
          key={video.etag} video={video}/>)
    });

  // we use className insead of class because of the conflict with the class in the javascript syntax..
  return (<ul className="col-md-4 list-group">{videoItems}</ul>);
};

export default VideoList;
