import {useState } from 'react';
// import '../App.css';
import Form from '../Form/Form';

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

  return (
    <div className="App">
    <Form/>
    </div>
  );
}

export default App;
