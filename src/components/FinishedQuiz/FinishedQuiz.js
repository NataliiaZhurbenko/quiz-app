import React from "react";
import Button from "../UI/Button/Button";
import {Link} from 'react-router-dom';

import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, index) => {
    if (props.results[index] === "success") {
      total++;
    }

    return total;
  }, 0);

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const iconClasses = [
            "fa",
            props.results[quizItem.id] === "success" ? "fa-check" : "fa-times",
            classes[props.results[quizItem.id]],
          ];

          return (
            <li key={index}>
              <strong>{index + 1}. </strong>
              {quizItem.question}
              <i className={iconClasses.join(" ")} />
            </li>
          );
        })}
      </ul>
      <p>
        {" "}
        Correct answers {successCount}/ {props.quiz.length}
      </p>
      <div>
        <Button onClick={props.onRetry} type="primary">
          Pass one more time
        </Button>
          <Link to='/'>
              <Button type="success">Go to the quiz questions</Button>
          </Link>
      </div>
    </div>
  );
};

export default FinishedQuiz;
