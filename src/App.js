// import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import NavSearch from "./components/NavSearch";
import CommentSection from "./components/CommentSection";
// import videoviewer from "./components/videoviewer";
// import Details from "./components/Details";
// import AddVideo from "./components/AddVideo";

function App() {
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState();
    const [search, setSearch] = useState("");


useEffect(() => {
    getAllVideos()
},  []);

// async function getAllVideos(){
//     let response = await axios.get('https://www.googleapis.com/youtube/v3/');
//     console.log(response.data);
// }

const getAllVideos = async () => {
    try{
        let response = await axios.get('https://www.googleapis.com/youtube/v3/');
        setVideos(response.data)
    }catch{
        console.log("file not found")
    }
}

const handleClick = (event) => {
    console.log("click handled " + event.target.name);
    setCurrentVideo(event.target.name);
}

const handleChange = (event) => {
    console.log("change handled");
    let searchTerm = event.target.value;
    setSearch(searchTerm);
}

return (
    <div className="App">
        <NavSearch
        videos={videos}
        search={search}
        handleChange={handleChange}
        
        />
        {/* {videos.length > 0 ?  
         <videoviewer
            video={videos}
            search={search}
            handleClick={handleClick}
            />
        :null} */}
        {/* {{videos.length > 0 ?
           <Details
            videos={videos}
            currentVideo={currentVideo}
        }}     */}
        <div>
            <CommentSection
            RegisterForm
            />
        </div>
    </div>
    
    )
}

export default App;
