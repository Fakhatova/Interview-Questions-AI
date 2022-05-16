import {useState } from 'react';
// import '../App.css';
import Form from '../Form/Form';
import InterviewCard from '../Card/InterviewCard';

function App() {
  const [responses, setResponses] = useState([])
  
  const handleNewResponses = (newPrompt, newResponse) => {
    setResponses([...responses, {prompt: newPrompt, response: newResponse}])
  }
  return (
    <div className="App">
    <Form handleNewResponses={handleNewResponses}/>

    </div>
  );
}

export default App;
