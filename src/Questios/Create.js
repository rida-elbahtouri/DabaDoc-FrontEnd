import { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { CreateQuestion } from "../functions/Api";
const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);
  const [warningMessage, setWarningMessage] = useState(true);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setWarningMessage(false);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const renderWarning = (warning) => {
    if (warning) {
      return (
        <Alert variant="warning">
          if you didn't allow access to your location your question won't rank
          on the board
        </Alert>
      );
    }
  };
  const renderError = (error) => {
    if (error) {
      return (
        <Alert variant="danger">
          Something went wrong, make sure all the fields are fieled and that
          your location is accessible for the website
        </Alert>
      );
    }
  };
  const renderSuccess = (success) => {
    if (success) {
      return (
        <Alert variant="success">Your questin is added to the board</Alert>
      );
    }
  };
  const hundleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(false);
    setErrorMessage(false);
    if (title && content && latitude && longitude) {
      CreateQuestion(localStorage.getItem("token"), {
        title,
        content,
        latitude,
        longitude,
      })
        .then(() => {
          setSuccessMessage(true);
        })
        .catch(() => {
          setErrorMessage(true);
        });
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <Form onSubmit={hundleSubmit}>
      {renderWarning(warningMessage)}
      {renderError(errorMessage)}
      {renderSuccess(successMessage)}
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="title"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Content</Form.Label>
        <Form.Control
          required
          onChange={(e) => {
            setContent(e.target.value);
          }}
          as="textarea"
          rows={3}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
};

export default Create;
