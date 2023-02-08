import { useState } from 'react';
import './App.css';

function App() {
  const [quizStartState,setQuizStartState] = useState(false);

  const quizStartHandler = () => {
    setQuizStartState(true);
  }

  return (
    <div className="App">
      <h1>Quizz App</h1>
      {(!quizStartState) ? <button onClick={quizStartHandler}>Start Quiz</button>:''}
    </div>
  );
}

export default App;
