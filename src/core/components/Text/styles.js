import styled from "styled-components";

export const Text = styled.p`
  margin: 0px;
  padding: 0px;
  margin-bottom: ${(props) => props.marginBottom};

  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-family: ${(props) => props.family};
`;
