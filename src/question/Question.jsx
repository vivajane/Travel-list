import "./Question.css"
import React from 'react';
import { useState } from "react";

const questions = [
    {
        id: 1,
        questions: "What is your name?",
        answer: "My name is Vivian",
    },
    {
        id: 2,
        questions: "What is your dad's name?",
        answer: "His name is Sylvester",
    },
    {
        id: 3,
        questions: "What is your mum's name?",
        answer: "Her name is Celestina",
    },
    {
        id: 4,
        questions: "What is your husband's name?",
        answer: "His name is Chinedu",
    },
]

const Question = () => {
    const[showAnswer, setShowAnswer] = useState(null)
    const onClickHandler = (id) => {
        setShowAnswer(id)
    }
  return (
    <div>
        <ul>
            {
                questions.map((question) => (
                    <List question= {question} showAnswer={showAnswer} onClickHandler={onClickHandler}/>
                ))
            }
             <div className="times">&times;</div>

        </ul>
       

      
    </div>
  )
}



export default Question

const List = function({question, showAnswer, onClickHandler}){
    return <div >
        <li key={question.id}  className= {question.id === showAnswer ? "active" : "null"}>
            <p onClick={() => onClickHandler(question.id)}>{question.id === showAnswer ? question.answer : question.questions}</p>
    </li>
    
    </div>
}
