import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AddAnswer } from "../functions/Api";

const Create = (props) => {
  const [content, setContent] = useState("");

  const hundleSubmit = (e) => {
    e.preventDefault();
    if (content) {
      AddAnswer(localStorage.getItem("token"), {
        content,
        question_id: props.question_id,
      })
        .then((res) => {
          props.AddAnswerToList(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <Form className="p-2 border bg-white mb-2" onSubmit={hundleSubmit}>
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
