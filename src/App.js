import { useState } from 'react';
import './App.css';
import Banner from './components/UI/Banner/Banner';
import Button from './components/UI/Button/Button';
import Card from './components/UI/Card/Card';

function App() {
  const [quizStartState,setQuizStartState] = useState(false);
  let [questionsAnswered, setQuestionsAnswered] = useState(0);
  let [correctAnswers, setCorrectAnswers] = useState({
    questionsCorrect : 5
  });
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      questionId : 1,
      question : 'Who is the father of our nation?',
      option1 : 'Mahatma Gandhi',
      option2 : 'Jawaharlal Nehru',
      option3 : 'Donald Trump',
      option4 : 'Barrack Obama',
      answer : 'Mahatma Gandhi',
      isAnswered:false
    },
    {
      questionId : 2,
      question : 'What color is are the leaves ?',
      option1 : 'Blue',
      option2 : 'Red',
      option3 : 'Yellow',
      option4 : 'Green',
      answer : 'Green',
      isAnswered:false
    },
    {
      questionId : 3,
      question : 'What color is the sky ?',
      option1 : 'Blue',
      option2 : 'Red',
      option3 : 'Yellow',
      option4 : 'Green',
      answer : 'Blue',
      isAnswered:false
    },
    {
      questionId : 4,
      question : 'What color is the sky ?',
      option1 : 'Blue',
      option2 : 'Red',
      option3 : 'Yellow',
      option4 : 'Green',
      answer : 'Blue',
      isAnswered:false
    },
    {
      questionId : 5,
      question : 'What color is the fire ?',
      option1 : 'Blue',
      option2 : 'Red',
      option3 : 'Yellow',
      option4 : 'Green',
      answer : 'Yellow',
      isAnswered:false
    }
  ];

  const [questionsState, setQuestionsState] = useState(questions);

  const quizStartHandler = () => {
    setQuizStartState(true);
    setShowResults(false);
    setQuestionsState(questions);
    setCorrectAnswers(0);
  }


  const attemptHandler = (event) => {
    setQuestionsAnswered(++questionsAnswered);

    const nextQuestionArray = [...questionsState];
    const questionToBeChanged = nextQuestionArray.find(a => 
      a.questionId == event.target.parentNode.id
  );

    const isCorrect = nextQuestionArray.find(a => 
      a.answer === event.target.value
    );

    
    questionToBeChanged.isAnswered=true;
    setQuestionsState(nextQuestionArray);

    if(questionToBeChanged.answer === event.target.value) {
      setCorrectAnswers(++correctAnswers);
    }
  }

  const correctAnswerUpdateHandler = () => {

  };

  const resultsShowHandler = () => {
    setShowResults(true);
    setQuizStartState(false);
    setQuestionsAnswered(0);
  };

  const questionsCards = questionsState.map((question) => {
    return <Card key={question.questionId}
    id={question.questionId}
    question={question.question}
    correctAnswerMarkUpdate={correctAnswerUpdateHandler}
    attempt={attemptHandler}
    options={{
    option1: question.option1,
    option2: question.option2,
    option3: question.option3,
    option4: question.option4
    }}
    isDisabled={question.isAnswered}
    />;
  }); 

  return (
    <div className="App">
      <h1>Quizz App</h1>
      {(showResults) ? <Banner correct={correctAnswers}/>:''}
      {(!quizStartState) ? <Button handler={quizStartHandler}>Start Quiz</Button>:''}
      {(quizStartState) ? <div>{questionsCards}</div> : ''}
      {(questionsAnswered === 5) ? <Button handler={resultsShowHandler}>Show Results</Button>:''}
    </div>
  );
}

export default App;
