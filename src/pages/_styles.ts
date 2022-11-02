import styled from "styled-components";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

export const Header = styled.header`
  background: linear-gradient(88.27deg, #574ae8 0%, #3ea1db 100%);

  padding: 2.5rem 15.625rem;

  .container {
    display: flex;
    justify-content: space-between;

    margin-bottom: 4.375rem;
  }

  .label {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 1.5rem;

    color: #ffff;
  }
`;

export const Search = styled.input`
  width: 100%;
  padding: 1.3125rem;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  border: none;

  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.125rem;

  color: #ffffff;
`;

export const ListCard = styled.div`
  display: block;
  margin: auto;
`;

export const IconArrowUp = styled(BsFillArrowUpSquareFill)`
  font-size: 4rem;

  color: #3ea1db;

  position: fixed;
  bottom: 5rem;
  right: 5rem;
  cursor: pointer;
`;

export const NavListFilter = styled.div`
  margin-bottom: 6.25rem;
  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    width: 56.25rem;
    margin: auto;

    margin-top: 1rem;
  }
  .label {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 1.5rem;
  }
`;
