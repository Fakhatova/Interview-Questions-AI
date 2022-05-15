import { useState } from "react"

const Form = () => {
const [prompt, setPrompt] = useState('');

const handleFormSubmit = (event) => {
    event.preventDefault()
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