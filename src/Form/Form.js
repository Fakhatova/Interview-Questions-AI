import { useState } from "react"
import { postRequest } from "../Api";
import InterviewCard from "../Card/InterviewCard";

const Form = ({handleNewResponses}) => {
const [prompt, setPrompt] = useState('');

const handleFormSubmit = async (event) => {
    event.preventDefault()
    setPrompt('')
    const postPrompt = await postRequest(prompt);
    handleNewResponses(prompt, postPrompt.choices[0].text)
    
}

    return (
    <main>
    <form className="input-form" onSubmit={handleFormSubmit}>
        <label>
        Enter prompt:
        <input type="text" name="input-text" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
        </label>
        <input type="submit" value="Submit"/>
    </form>
    </main>
    )
}

export default Form;