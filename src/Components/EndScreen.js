import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank'
import '../App.css';

function EndScreen() {

     const { score , setScore , setGameState} = useContext(QuizContext);
    
    const restartQuiz = () => {
        //console.log(Questions);
        //return;
        setScore(0)
        setGameState("menu")
    }

    return (
        <div className="EndScreen">
            <h1>Quiz Finished.</h1>
            <h3 className="score">{score} / {Questions.length}</h3>
            <button onClick={ restartQuiz }>Restart Quiz.</button>
        </div>
    )
}

export default EndScreen
