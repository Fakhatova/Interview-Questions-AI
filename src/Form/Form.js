import { useState } from "react"
import { postRequest } from "../Api";
import InterviewCard from "../Card/InterviewCard";

const Form = () => {
const [prompt, setPrompt] = useState('');
const [response, setResponse] =  useState([])

const handleFormSubmit = async (event) => {
    event.preventDefault()
    setPrompt('')
    await postRequest(prompt)
    .then(data => setResponse([{propmt: prompt, response:data.choices[0].text}]))
}


    return (
    <form className="input-form" onSubmit={handleFormSubmit}>
        <label>
        Enter prompt:
        <input type="text" name="input-text" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
        </label>
        <input type="submit" value="Submit"/>
    </form>
    )
}

export default Form;