import { Button } from "semantic-ui-react";

function ButtonGround({ buttons }) {
  return (
    <Button
      className="btn"
      onClick={() => buttons("ground")}
      inverted
      color="brown"
    >
      Terrestre
    </Button>
  );
}

export default ButtonGround;
