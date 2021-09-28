import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const QuestionCard = ({ question }) => {
  const renderDist = (dist) => {
    if (dist || dist == 0) {
      return <Card.Text> {dist.toFixed(2)} Km </Card.Text>;
    }
  };
  return (
    <div>
      <Card className="m-2">
        <Link to={`/question/${question.id}/answers`}>
          <Card.Body>
            <Card.Title>{question.title}</Card.Title>
            <Card.Text> {question.content} </Card.Text>
            {renderDist(parseFloat(question.distance))}
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};

export default QuestionCard;
