import React from 'react'
import AnswersList from './AnswersList/AnswersList'
import classes from './ActiveQuiz.module.css'

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>{props.answerNumber}.&nbsp;</strong>
                {props.question}
            </span>
            <small>{props.answerNumber} from {props.quizLenght}</small>
        </p>
        <AnswersList
            state={props.state}
            onAnswerClickHandler={props.onAnswerClickHandler}
            answers={props.answers}/>
    </div>
)

export default ActiveQuiz