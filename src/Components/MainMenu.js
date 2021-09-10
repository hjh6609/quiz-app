import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import '../App.css';

function MainMenu() {
    
    const { gameState ,setGameState } = useContext(QuizContext);
    

    function handleClick() {
        //e.preventDefault();
        setGameState("quiz");
      }


    return (
        <div className="Menu">
            <button onClick={handleClick}>
                Start Quiz
            </button>
        </div>
    )
}


export default MainMenu;