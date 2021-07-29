import { Button } from "semantic-ui-react";

function ButtonGhost({ buttons }) {
  return (
    <Button
      className="btn"
      onClick={() => buttons("ghost")}
      inverted
      color="violet"
    >
      Fantasma
    </Button>
  );
}

export default ButtonGhost;
