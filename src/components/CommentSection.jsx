import RegisterComment from "../customHooks/RegisterComment";
import React, { useState, useEffect } from 'react';
import axios from "axios";


function CommentSection(props) {

    const upLikes = async (event) => {
        const commentId = event.target.name;
        await axios
          .put(`http://localhost:5000/api/videos/${commentId}/likes`)

        }

    const upDislikes = async (event) => {
        const commentId = event.target.name;
        await axios
          .put(`http://localhost:5000/api/videos/${commentId}/dislikes`)
        
        }


    const [comments, setComments] = useState([]);

    const getAll = async () => {
        await axios
          .get('http://localhost:5000/api/videos/')
          .then((res) => {
            // console.log(res.data);
            setComments(res.data);
          });
        }

    const commentsByVideo = comments.filter( function(el){
        return (el.videoId === "SAfq55aiqPc")
    });


    useEffect(() => {
        getAll()
    },  [comments]);
      
    return (
        <div>
        {/* <button className="btn btn-outline-secondary" type="button" id="button-addon1">Post Comment</button>
        <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/> */}
            <div>
                <RegisterComment/>
                
            </div>
            <div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Comment</th>
                <th scope="col">Like</th>
                <th scope="col">Dislike</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                {(commentsByVideo.length > 0) ? commentsByVideo.map((comment,i)=> 
                <tr key={i}> 
                    <td>{comment.comment}</td><td><a name={comment._id} onClick={upLikes}>Likes:</a>{comment.likes}</td><td><a name={comment._id} onClick={upDislikes}>Dislikes:</a>{comment.dislikes}</td></tr>    ):null} 

                </tr>

            </tbody>

            </table>
 
            </div>
        </div>
        );
}



export default CommentSection;


