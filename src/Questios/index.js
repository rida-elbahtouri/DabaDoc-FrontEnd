import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

import { getQuestions } from "../functions/Api";
import Card from "./card";

const Index = () => {
  const [questions, setQuestions] = useState(null);
  const [warningMessage, setWarningMessage] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log([position.coords.latitude, position.coords.longitude]);
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
        return <Card question={ques} key={ques.id} />;
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
