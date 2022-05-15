import { useEffect, useState } from 'react';
// import '../App.css';

function App() {
  const [response, setResponse] = useState('')
  const data = {
  "prompt": "Create a list of 8 questions for my interview with a science fiction author",
  "temperature": 0.5,
  "max_tokens": 150,
  "top_p": 1.0,
  "frequency_penalty": 0.0,
  "presence_penalty": 0.0,
  };

  useEffect(() => {
    fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_INTERVIEW_API_KEY}`,
      },
      body: JSON.stringify(data),

    })
    .then(res => res.json()).then(data => setResponse(data.choices[0].text))
  }, [setResponse])

  return (
    <div className="App">
    </div>
  );
}

export default App;
