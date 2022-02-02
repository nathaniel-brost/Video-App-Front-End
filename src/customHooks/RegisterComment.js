import React from "react";
import useForm from "./useForm";

const RegisterComment = () => {
    const { values, handleChange, handleSubmit} = useForm(register);

    function register (){
        alert (`Thank you for posting a comment on the ${values.name} video!`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Your Comment:
                    <input
                        type="comment"
                        name="comment"
                        onChange={handleChange}
                        value={value.comment}
                        required={true}
                    />
                </label>
                <button type="submit">Post:</button>
            </form>
        </div>
    );
};

export default RegisterComment;
