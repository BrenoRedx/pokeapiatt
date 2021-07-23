import { Button } from "semantic-ui-react";

function ButtonFlying({ buttons }) {
  return (
    <Button
      className="btn"
      onClick={() => buttons("flying")}
      inverted
      color="olive"
    >
      Voador
    </Button>
  );
}

export default ButtonFlying;
