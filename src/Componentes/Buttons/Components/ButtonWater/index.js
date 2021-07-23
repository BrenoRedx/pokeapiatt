import { Button } from "semantic-ui-react";

function ButtonWater({ buttons }) {
  return (
    <Button
      className="btn"
      onClick={() => buttons("water")}
      inverted
      color="blue"
    >
      Água
    </Button>
  );
}

export default ButtonWater;
