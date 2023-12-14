import React, {useState} from "react";
import {uploadData} from "../api/api.ts";

function Form({id}: {id:number}) {
    const [formData, setFormData] = useState({id: id, content: ''})
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {value} = event.target;
        setFormData({...formData, content: value})
    }
    return (
        <form onSubmit={() => uploadData(formData)} className={'space-x-4'}>
            <textarea onChange={handleChange} className={'w-96 border border-black'} value={formData.content}/>
            <button type="submit" className={'text-4xl text-yellow-500'}>Send</button>
        </form>
    );
}

export default Form;