import { useEffect, useState } from "react";
import { getAnswers, AddToFav, removeFromFav } from "../functions/Api";
import QuestionCard from "../Questios/card";

import CreateAnswer from "./Create";

const Index = (props) => {
  const [question, setQuestion] = useState(null);
  const [fav, setFav] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = props.match.params.id;

    getAnswers(token, id)
      .then((res) => {
        console.log(res.data);
        setQuestion(res.data.question);
        setFav(res.data.fav);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  const AddAnswerToList = (answer) => {
    question.answers.unshift(answer);
    setQuestion(null);
    setQuestion(question);
  };

  const renderAnswers = (answers) => {
    if (answers && answers.length > 0) {
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

  const AddRemoveFromFav = () => {
    const token = localStorage.getItem("token");
    const id = props.match.params.id;
    if (fav) {
      removeFromFav(token, id)
        .then((res) => {
          console.log(res);
          setFav(!fav);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      AddToFav(token, id)
        .then((res) => {
          console.log(res);
          setFav(!fav);
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    }
  };

  const renderifFav = (fav) => {
    if (fav) {
      return (
        <h3
          role="button"
          onClick={AddRemoveFromFav}
          className="text-success text-end pe-2"
        >
          My Favorite
        </h3>
      );
    } else {
      return (
        <h3
          role="button"
          onClick={AddRemoveFromFav}
          className="text-dark text-end pe-2"
        >
          My Favorite
        </h3>
      );
    }
  };
  const renderHelper = (question) => {
    if (question) {
      return (
        <div>
          <div>
            {renderifFav(fav)}
            <QuestionCard question={question} />
          </div>
          <div className="border rounded bg-light">
            <CreateAnswer
              AddAnswerToList={AddAnswerToList}
              question_id={question.id}
            />
            <div>{renderAnswers(question.answers)}</div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderHelper(question)}</div>;
};

export default Index;
