import RegisterComment from "../customHooks/RegisterComment";
import React, { useState, useEffect } from 'react';
import axios from "axios";


function CommentSection(props) {

    const [comments, setComments] = useState([]);

    const getAll = async () => {
        await axios
          .get('http://localhost:5000/api/videos/')
          .then((res) => {
            console.log(res.data);
            setComments(res.data);
          });
        }

    // Filter by videoID
    

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
                {(comments.length > 0) ? comments.map((comment,i)=> <tr key={i}> <td>{comment.comment}</td><td>{comment.likes}</td>  <td>{comment.dislikes}</td> </tr>    ):null} 

                </tr>

            </tbody>

            </table>
 
            </div>
        </div>
        );
}



export default CommentSection;


