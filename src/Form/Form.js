const Form = () => {

handleFormSubmit = (event) => {

    event.preventDefault()
}

    return (
    <form className="input-form">
        <label>
        Enter prompt:
        <input type="text" name="input-text" />
        </label>
        <input type="submit" value="Submit" onSubmit={(event) => handleFormSubmit} />
    </form>

    )

    
}

export default Form;