import React from "react";
import AnswerItem from "./AnswerItem/AnswerItem";
import classes from "./AnswersList.module.css";

const AnswersList = (props) => (
  <ul className={classes.AnswersList}>
    {props.answers.map((answer, index) => {
      return (
        <AnswerItem
          onAnswerClickHandler={props.onAnswerClickHandler}
          answer={answer}
          key={index}
          state={props.state ? props.state[answer.id] : null}
        />
      );
    })}
  </ul>
);

export default AnswersList;
