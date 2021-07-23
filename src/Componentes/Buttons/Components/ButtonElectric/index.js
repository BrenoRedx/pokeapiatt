import { Button } from "semantic-ui-react";

function ButtonElectric({ buttons }) {
  return (
    <Button
      className="btn"
      onClick={() => buttons("electric")}
      inverted
      color="yellow"
    >
      Eletrico
    </Button>
  );
}

export default ButtonElectric;
