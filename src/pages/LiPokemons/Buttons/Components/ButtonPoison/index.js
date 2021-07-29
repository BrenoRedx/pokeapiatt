import { Button } from "semantic-ui-react";

function ButtonPoison({ buttons }) {
  return (
    <Button
      className="btn"
      onClick={() => buttons("poison")}
      inverted
      color="purple"
    >
      Venenoso
    </Button>
  );
}

export default ButtonPoison;
