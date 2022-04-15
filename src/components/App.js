import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(data => setQuestions(data))
  }, [])

  function onFormSubmit(newQ) {
    const updatedQList = [...questions, newQ]
    setQuestions(updatedQList)
  }

  function onDelete(deletedQ) {
    const updatedQList = questions.filter(q => q.id !== deletedQ.id);
    setQuestions(updatedQList)
  }

  function onUpdateAnswer(updatedA) {
    const updatedQ = questions.map(question => {
      if (question.id === updatedA.id) {
      return updatedA;
    } else {
      return question;
    }
  });
  setQuestions(updatedQ)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onFormSubmit={onFormSubmit} /> : <QuestionList onUpdateAnswer={onUpdateAnswer} onDelete={onDelete} questions={questions} />}
    </main>
  );
}

export default App;
