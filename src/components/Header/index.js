import { HeaderDiv, LogoHeader, InputHeader } from "./styled";

export function HeaderComponent() {
  return (
    <HeaderDiv>
      <LogoHeader
        src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1"
        alt="pokeapi"
      ></LogoHeader>
      <div className="effects"></div>
      <InputHeader type="input" placeholder="Pesquise um pokémon" />
    </HeaderDiv>
  );
}
