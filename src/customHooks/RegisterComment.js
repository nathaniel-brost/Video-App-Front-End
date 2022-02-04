import React from "react";
import useForm from "./useForm";

const RegisterComment = () => {
    const { values, handleChange, handleSubmit} = useForm(register);

    function register (){
        // alert (`Thank you for posting a comment on the ${values.name} video!`)
        // make a post request here
    }

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
