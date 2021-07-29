import { Button } from "semantic-ui-react";

function ButtonFire({ buttons }) {
  return (
    <Button
      className="btn"
      onClick={() => buttons("fire")}
      inverted
      color="red"
    >
      Fogo
    </Button>
  );
}

export default ButtonFire;
