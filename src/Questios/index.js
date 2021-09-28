import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getQuestions } from "../functions/Api";
import Card from "./card";

const Index = () => {
  const [questions, setQuestions] = useState(null);
  const [warningMessage, setWarningMessage] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getQuestions(token, [
          position.coords.latitude,
          position.coords.longitude,
        ])
          .then((res) => {
            setWarningMessage(false);
            setQuestions(res.data);
          })
          .catch((e) => {
            console.log(e);
          });
      },
      () => {
        getQuestions(token)
          .then((res) => {
            setQuestions(res.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    );
  }, []);
  const renderWarning = (warning) => {
    if (warning) {
      return (
        <Alert variant="warning">
          Please allow access to your location so we can show you relecant
          questions to your area :)
        </Alert>
      );
    }
  };
  const renderHelper = (questions) => {
    if (questions) {
      const res = questions.map((ques) => {
        return (
          <Link to={`/question/${ques.id}/answers`}>
            <Card question={ques} key={ques.id} />
          </Link>
        );
      });
      return res;
    } else {
      return <h2>Loading</h2>;
    }
  };
  return (
    <div>
      <h1 className="text-center text-info">Questions</h1>
      {renderWarning(warningMessage)}
      {renderHelper(questions)}
    </div>
  );
};

export default Index;
