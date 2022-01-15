import { Button } from "semantic-ui-react";

function ButtonTodos({ buttons }) {
  return (
    <Button
      className="btn"
      onClick={() => buttons("todos")}
      inverted
      color="grey"
    >
      Mostrar todos
    </Button>
  );
}

export default ButtonTodos;
