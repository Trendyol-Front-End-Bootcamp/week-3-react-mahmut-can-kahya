import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  background-color: rgb(60, 62, 68);
`;
export const ImageSide = styled.div`
  display: flex;
  flex: 0.4;
`;

export const ContentSide = styled.div`
  display: flex;
  flex: 0.6;
  padding-left: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Text = styled.div`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  margin: 0px;
  padding: 0px;
  margin-bottom: ${(props) => props.marginBottom}px;
`;

export const AliveIcon = styled.div`
  border-radius: 50%;
  background-color: #55cc44;
  width: 9px;
  height: 9px;
  margin-right: 8px;
`;

export const DeadIcon = styled.div`
  border-radius: 50%;
  background-color: #d63d2e;
  width: 9px;
  height: 9px;
  margin-right: 8px;
`;

export const StatusLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;
