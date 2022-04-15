import React from "react";
import QuestionItem from './QuestionItem';

function QuestionList({ questions, onDelete, onUpdateAnswer }) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => (
        <QuestionItem onUpdateAnswer={onUpdateAnswer} onDelete={onDelete} question={question} key={question.id} />)
      )}</ul>
    </section>
  );
}

export default QuestionList;
