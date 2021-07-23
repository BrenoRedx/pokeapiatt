import { Button } from "semantic-ui-react";

function ButtonGrass({ buttons }) {
  return (
    <Button
      className="btn"
      onClick={() => buttons("grass")}
      inverted
      color="green"
    >
      Grama
    </Button>
  );
}

export default ButtonGrass;
