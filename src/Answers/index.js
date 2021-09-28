import { useEffect, useState } from "react";
import { getAnswers } from "../functions/Api";
import QuestionCard from "../Questios/card";
const Index = (props) => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(props);
    const id = props.match.params.id;
    getAnswers(token, id)
      .then((res) => {
        console.log(res.data);
        setQuestion(res.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  const renderAnswers = (answers) => {
    if (answers.length > 0) {
      const res = answers.map((answer) => {
        return (
          <p
            className="border rounded mx-2 bg-light p-2 text-capitalize"
            key={answer.id}
          >
            {answer.content}
          </p>
        );
      });
      return res;
    }
  };
  const renderHelper = (question) => {
    if (question) {
      return (
        <div>
          <QuestionCard question={question} />
          <div>{renderAnswers(question.answers)}</div>
        </div>
      );
    }
  };

  return <div>{renderHelper(question)}</div>;
};

export default Index;
