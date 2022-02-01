import {
  CardTop,
  CardList,
  CardBody,
  ContainerPoke,
  ContainerButtons,
  ButtonOut,
  ButtonCenter,
  ButtonIn,
  TextButton,
} from "./styled";

export function PokeCard({ listGetPokemons }) {
  console.log(listGetPokemons);
  return (
    <CardList>
      {listGetPokemons.map((pokemon, key) => {
        return (
          <li key={key}>
            <CardTop>
              <ContainerPoke>
                <img
                  className="PokeImagem"
                  alt="teste"
                  src="http://blogbeautifuldreams.files.wordpress.com/2013/10/pikachu-pikachu-29274386-861-927_1.jpg"
                ></img>
              </ContainerPoke>
            </CardTop>
            <CardBody>
              <ContainerButtons>
                <ButtonOut>
                  <ButtonCenter>
                    <ButtonIn>
                      <TextButton>Name:{pokemon.name}</TextButton>
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
            </CardBody>
          </li>
        );
      })}
    </CardList>
  );
}
