import { Card } from "react-bootstrap";

const QuestionCard = ({ question }) => {
  const renderDist = (dist) => {
    if (dist || dist == 0) {
      return (
        <Card.Text className="text-decoration-none text-primary">
          {dist.toFixed(2)} Km
        </Card.Text>
      );
    }
  };
  return (
    <div>
      <Card className="m-2 text-decoration-none text-dark">
        <Card.Body>
          <Card.Title className="text-decoration-none">
            {question.title}
          </Card.Title>
          <Card.Text className="text-decoration-none">
            {question.content}
          </Card.Text>
          {renderDist(parseFloat(question.distance))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default QuestionCard;
