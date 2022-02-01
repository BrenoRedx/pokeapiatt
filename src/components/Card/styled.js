import styled from "styled-components";

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1rem;
  list-style: none;

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 1rem;
    list-style: none;
  }
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(1, auto);
    gap: 1rem;
    list-style: none;
  }
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
export const ContainerButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  padding-top: 7rem;
  margin-left: 1.3rem;
  gap: 1;
`;
export const ButtonOut = styled.div`
  width: 7rem;
  height: 5rem;
  background: #cda945;
  border-radius: 0.5rem;
`;

export const ButtonCenter = styled.div`
  width: 6rem;
  height: 4rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  position: absolute;
  background: white;
  border-radius: 0.5rem;
`;
export const ButtonIn = styled.div`
  width: 5rem;
  height: 3rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  background: #28526a;
  position: absolute;
  border-radius: 0.5rem;
`;
export const TextButton = styled.div`
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;
