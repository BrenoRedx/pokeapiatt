import styled from "styled-components";

export const HeaderDiv = styled.div`
  padding: 4rem 0 4rem 2rem;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 6rem;
  border-bottom: 1.5rem solid black;

  .effects {
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
    border: 1.5rem solid black;
    background: white;
    display: absolute;
    margin-top: 9.6rem;
  }

  @media (max-width: 630px) {
    .effects {
    width: 0;
    height: 0;
    border-radius: 0;
    border: 0;
  }
`;

export const LogoHeader = styled.img`
  width: 14rem;
  height: auto;
`;

export const InputHeader = styled.input`
  height: 2rem;
  margin-right: 2rem;
`;
