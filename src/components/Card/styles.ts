import styled from "styled-components";

export const Container = styled.div`
  width: 56.25rem;

  padding: 1.5rem;

  background: #ffffff;
  box-shadow: 0px 0px 0.625rem rgba(19, 19, 31, 0.05);
  border-radius: 5px;

  font-family: "Lexend Deca", sans-serif;

  margin: auto;
  margin-bottom: 3.125rem;

  .date {
    display: inline-block;

    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 1rem;

    color: #717171;

    margin-bottom: 1.375rem;
  }

  .description {
    font-weight: 400;
    font-size: 1.125rem;

    line-height: 2rem;

    color: #717171;
  }

  .flex-between-center {
    display: flex;
    justify-content: space-between;
    justify-items: center;
  }

  .blue-linear-gradient {
    background: -webkit-linear-gradient(88.27deg, #574ae8 0%, #3ea1db 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Title = styled.h2`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 1.625rem;

  color: #1a202c;

  margin-bottom: 0.5rem;
`;

export const Navbar = styled.div`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 2rem;
  color: #717171;
  a,
  p {
    display: inline-block;
    text-decoration: none;
    color: #717171;
    transition: 0.5s;
  }

  p {
    margin-right: 0.5rem;
  }

  a:hover {
    background: -webkit-linear-gradient(88.27deg, #574ae8 0%, #3ea1db 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
