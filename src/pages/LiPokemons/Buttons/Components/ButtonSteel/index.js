import { Button } from "semantic-ui-react";

function ButtonSteel({ buttons }) {
  return (
    <Button
      className="btn"
      onClick={() => buttons("steel")}
      inverted
      color="grey"
    >
      Ferro
    </Button>
  );
}

export default ButtonSteel;
