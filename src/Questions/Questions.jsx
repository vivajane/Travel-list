import "./Questions.css"
import React from 'react';
import { useState } from "react";
const faqs = [
    {
        num: 1,

        questions: "Tell me about you?",
        answer: "My name is Vivian, I am a Frontend Web Developer with experience in HTML, CSS ,JAVASCRIPT and REACT. Experienced in building responsive web designs that adapt and display correctly on various screen sizes and devices, including smartphones, tablets, and desktop computers also leveraging popular framework like React.js to streamline development, improve code maintainability, and enhance the performance of web applications.",
    },
    {
        num: 2,
        questions: "Why are you interested?",
        answer: "I am interested in the internship because I am eager to expand my knowledge of frontend technologies and frameworks while also gaining experience in applying these skills to real-world projects,"
    },
    {
        num: 3,
        questions: "Why should we hire you?",
        answer: "I'm committed to writing clean, maintainable code and staying updated on the latest frontend technologies. I regularly participate in online courses and attend conferences to expand my skills and knowledge. Overall, my experience with projects has equipped me with the technical skills, collaborative mindset, and problem-solving abilities needed to excel as a frontend engineer.",
    },
    {
        num: 4,
        questions: "Additional word?",
        answer: " I am excited about the growth and learning with your team. While I may still at the beginning phase of my professional journey, my enthusiasm for Tech is unmatched and I am very eager to apply my skills in a real-world setting learning from seasoned professionals and contributing meaningfully to the success and growth of the company.                       ",
    },
    {
        num: 5,
        questions: "Your Portfolio?",
        answer: "https://kosiso-portfolio.vercel.app/"
    },
]
const Accordion = () => {
    const[show, setShow] = useState(false)
    
  return (
    <div className="container">
        <ul>
            {
                faqs.map((faq) => 
                    <AccordionList key={faq.num} faq={faq} show = {show} setShow= {setShow} />
                )
            }
            </ul>
      
    </div>
  )
}

export default Accordion;
const AccordionList = function({faq,show,setShow}){
    const num = faq.num;
    const newShow = num === show;
   
    

    const toggleShow = () => {
        setShow(num);
       
    }
    return <div className="list" onClick={toggleShow}>
    <li className= {show && "active"}>
        <p>{faq.num <= 9 ? `0${faq.num}` : `${faq.num}`}</p>
        <p>{faq.questions}</p>
        <div>{newShow ? "-" : "+"}</div>
    </li>
    <div>{newShow&& `${faq.answer}` }</div>
</div>
  
   
}
