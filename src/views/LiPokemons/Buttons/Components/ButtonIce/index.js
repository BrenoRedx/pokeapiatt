import { Button } from "semantic-ui-react";

function ButtonIce({ buttons }) {
  return (
    <Button
      className="btn"
      onClick={() => buttons("ice")}
      inverted
      color="blue"
    >
      Gelo
    </Button>
  );
}

export default ButtonIce;
