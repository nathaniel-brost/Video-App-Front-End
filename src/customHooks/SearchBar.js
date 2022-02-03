import React from "react";
import useForm from "./useForm";

const SearchBar = () => {
    const { values, handleChange, handleSubmit} = useForm(register);

    function register (){
        alert (`Thank you for posting a comment on the ${values.name} video!`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Search Here
                    <input
                        type="comment"
                        name="comment"
                        onChange={handleChange}
                        value={values.search}
                        required={true}
                    />
                </label>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
