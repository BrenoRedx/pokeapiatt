import {
  ButtonOut,
  ButtonCenter,
  ButtonIn,
  ContainerButtons,
  TextButton,
} from "./buttonstyled.js";

export function ButtonPokeCard({ listPokemons }) {
  return (
    <ContainerButtons>
      <ButtonOut>
        <ButtonCenter>
          <ButtonIn>
            <TextButton></TextButton>
          </ButtonIn>
        </ButtonCenter>
      </ButtonOut>
      <ButtonOut>
        <ButtonCenter>
          <ButtonIn>
            <TextButton></TextButton>
          </ButtonIn>
        </ButtonCenter>
      </ButtonOut>
      <ButtonOut>
        <ButtonCenter>
          <ButtonIn>
            <TextButton></TextButton>
          </ButtonIn>
        </ButtonCenter>
      </ButtonOut>
    </ContainerButtons>
  );
}
