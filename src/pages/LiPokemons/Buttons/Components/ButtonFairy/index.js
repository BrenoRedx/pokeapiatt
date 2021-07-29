import { Button } from "semantic-ui-react";

function ButtonFairy({ buttons }) {
  return (
    <Button
      className="btn"
      onClick={() => buttons("fairy")}
      inverted
      color="pink"
    >
      Fada
    </Button>
  );
}

export default ButtonFairy;
