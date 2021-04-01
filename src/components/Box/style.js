import styled from "styled-components";

export const Container = styled.div`
  margin: 40px;
  border: 5px black;
`;

export const Content = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const Wrapper = styled.div`
  margin: 50px;
  padding: 30px;
  background: ${({bgColor}) => (bgColor ? bgColor : "white")};
  border: ${({textColor}) =>
    textColor ? "2px solid orange" : "2px solid purple"};
  &:hover {
    cursor: pointer;
    background: red;
  }
  div {
    color: ${({bgColor}) => (bgColor ? "red" : "green")};
  }
  @media (min-width: 768px) {
    div {
      display: none;
    }
  }
`;
