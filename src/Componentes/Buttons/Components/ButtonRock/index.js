import { Button } from "semantic-ui-react";

function ButtonRock({ buttons }) {
  return (
    <Button
      className="btn"
      onClick={() => buttons("rock")}
      inverted
      color="brown"
    >
      Terra
    </Button>
  );
}

export default ButtonRock;
