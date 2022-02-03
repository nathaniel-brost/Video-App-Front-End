// import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import NavSearch from "./components/NavSearch";
import CommentSection from "./components/CommentSection";
import EmbedPlayer from "./components/EmbedPlayer";
import RegisterComment from "./customHooks/RegisterComment";
// import videoviewer from "./components/videoviewer";
// import Details from "./components/Details";
// import AddVideo from "./components/AddVideo";

function App() {
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState();
    const [search, setSearch] = useState("");
    const [video, setVideo] = useState([]);
    const gapi = []


// useEffect(() => {
//     getAllVideos()
// },  []);

// const getAllVideos = async () => {
//     try{
//         let response = await axios.get('https://www.googleapis.com/youtube/v3/videos?id=dip2w_rGzn0&key=AIzaSyB1-ueSNezI16EPmUrOcdiF7ZRBhiE27HE');
//         setVideos(response.data)
//     }catch{
//         console.log("file not found")
//     }
// }

// useEffect(() => {
//     searchById()
// },  []);


// const searchById = async () => {
    
//     try{
//         let response = await axios.get('https://www.googleapis.com/youtube/v3/videos?id=dip2w_rGzn0&key=AIzaSyB1-ueSNezI16EPmUrOcdiF7ZRBhiE27HE');
//         setVideo(response.data);
//         console.log(response.data)
//     }catch{
//         console.log("file not found")
//     }
// }


function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
}
function loadClient() {
gapi.client.setApiKey("AIzaSyB1-ueSNezI16EPmUrOcdiF7ZRBhiE27HE");
return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}

function execute() {
return gapi.client.youtube.videos.list({
    "part": [
    "snippet,contentDetails,statistics"
    ],
    "id": [
    "dip2w_rGzn"
    ]
})
    .then(function(response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
            },
            function(err) { console.error("Execute error", err); });
}
gapi.load("client:auth2", function() {
// gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
});


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
            <EmbedPlayer
            />
        </div>
        <div>
        <RegisterComment
            />
        </div>
    </div>
    
    )
}

export default App;
