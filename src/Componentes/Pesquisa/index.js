import { Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function Pesquisa({ enviar }) {
  return (
    <div className="Pesquisa">
      <Form>
        <Form.Group>
          <Form.Input
            placeholder="Nome de usuário"
            name="Pokemon"
            onChange={enviar}
          />
          <Form.Button content="Search" />
        </Form.Group>
      </Form>
    </div>
  );
}
export default Pesquisa;
