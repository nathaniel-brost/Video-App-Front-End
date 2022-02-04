import React from "react";
import useForm from "./useForm";
import axios from "axios";

const RegisterComment = () => {

    const register = async () => {
        await axios
            .post('http://localhost:5000/api/videos', {
                videoId: "SAfq55aiqPc",
                comment: values.comment
            })
            
        
        }

    const { values, handleChange, handleSubmit} = useForm(register);


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Comment:
                    <input
                        type="comment"
                        name="comment"
                        onChange={handleChange}
                        value={values.comment}
                        required={true}
                    />
                </label>
                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default RegisterComment;
