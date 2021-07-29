import { Button } from "semantic-ui-react";

function ButtonBug({ buttons }) {
  return (
    <Button
      className="btn"
      onClick={() => buttons("bug")}
      inverted
      color="orange"
    >
      Inseto
    </Button>
  );
}

export default ButtonBug;
