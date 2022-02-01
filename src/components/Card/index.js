import { CardTop, CardList, CardBody, ContainerPoke } from "./styled";
import { ButtonPokeCard } from "./components/ButtonPokeCard";

export function PokeCard({ listGetPokemons }) {
  const listPokemons = listGetPokemons;
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
              <ButtonPokeCard listPokemons={listPokemons}></ButtonPokeCard>
            </CardBody>
          </li>
        );
      })}
    </CardList>
  );
}
