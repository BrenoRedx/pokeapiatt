import { Button } from "semantic-ui-react";

function ButtonDragon({ buttons }) {
  return (
    <Button
      className="btn"
      onClick={() => buttons("dragon")}
      inverted
      color="teal"
    >
      Dragão
    </Button>
  );
}

export default ButtonDragon;
