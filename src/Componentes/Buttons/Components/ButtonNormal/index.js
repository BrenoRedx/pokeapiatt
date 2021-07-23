import { Button } from "semantic-ui-react";

function ButtonNormal({ buttons }) {
  return (
    <Button className="btn" onClick={() => buttons("normal")} inverted>
      Normal
    </Button>
  );
}

export default ButtonNormal;
