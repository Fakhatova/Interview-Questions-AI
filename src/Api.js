export const postRequest = async (formData) => {
    const response = await fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_INTERVIEW_API_KEY}`,
            },
            body: JSON.stringify(formData),
        })
        return await response.json()

}