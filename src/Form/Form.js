import { useState } from "react"
import { postRequest } from "../Api";
import InterviewCard from "../Card/InterviewCard";

const Form = () => {
const [prompt, setPrompt] = useState('');
const [responses, setResponses] =  useState([])

const handleFormSubmit = async (event) => {
    event.preventDefault()
    setPrompt('')
    const postPrompt = await postRequest(prompt);
    setResponses([...responses, {prompt: prompt, response: postPrompt.choices[0].text}])
    
}


// const generateInterviewCard = (responses) => {
//     const interviewCards = responses.map(card => <InterviewCard card={card}/>)
// }

    return (
        <main>
    <form className="input-form" onSubmit={handleFormSubmit}>
        <label>
        Enter prompt:
        <input type="text" name="input-text" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
        </label>
        <input type="submit" value="Submit"/>
    </form>
    { responses && <InterviewCard responses={responses} />}
    </main>
    )
}

export default Form;