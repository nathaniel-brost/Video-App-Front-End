import {useState} from 'react';

const useForm = (callback) => {

    const handleChange = (event) => {
    event.persist();
    setFormValues({...event, [event.target.name]:event.target.value});
    }

    const handleSubmit = (event) => {
    event.preventDefault();
    callback();
    }

    return {values, handleChange, handleSubmit}

}

export default useForm;
