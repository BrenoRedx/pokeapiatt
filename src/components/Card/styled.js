import styled from "styled-components";

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1rem;
  list-style: none;
`;

export const CardTop = styled.div`
  width: 27rem;
  height: 13rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border: 1px solid #f9c91e;
  background-color: #f9c91e;
  margin-top: 7rem;
  margin-left: 2rem;
`;

export const CardBody = styled.div`
  width: 27rem;
  height: 18rem;
  background: #c4c4c4;
  margin-left: 2rem;
`;
export const ContainerPoke = styled.div`
  width: 13rem;
  height: 13rem;
  border-radius: 100%;
  background: white;
  position: absolute;
  margin-left: 7rem;
  margin-top: 6rem;

  .PokeImagem {
    width: 8rem;
    height: 8rem;
    margin-left: 3rem;
    margin-top: 2.3rem;
  }
`;
