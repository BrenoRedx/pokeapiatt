import styled from "styled-components";

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
