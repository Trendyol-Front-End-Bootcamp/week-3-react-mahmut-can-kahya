import styled from "styled-components";

const AliveIcon = styled.div`
  align-self: center;
  border-radius: 50%;
  background-color: #55cc44;
  width: 9px;
  height: 9px;
  margin-right: 8px;
`;

const DeadIcon = styled.div`
  align-self: center;
  border-radius: 50%;
  background-color: #d63d2e;
  width: 9px;
  height: 9px;
  margin-right: 8px;
`;

export const getStatusIcon = (status) => {
  switch (status) {
    case "Alive":
      return <AliveIcon />;
    case "Dead":
      return <DeadIcon />;
    default:
      return <DeadIcon />;
  }
};
