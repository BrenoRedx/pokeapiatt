import { Button } from "semantic-ui-react";

function ButtonPsychic({ buttons }) {
  return (
    <Button
      className="btn"
      onClick={() => buttons("psychic")}
      inverted
      color="violet"
    >
      Psíquico
    </Button>
  );
}

export default ButtonPsychic;
