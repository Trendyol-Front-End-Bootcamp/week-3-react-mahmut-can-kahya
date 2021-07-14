import styled from "styled-components";

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 60px);
  background-color: #f3f3f3;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3%;
  gap: 12px;
  width: 500px;
`;
export const Image = styled.img``;

export const RowStatus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
`;

export const Episodes = styled.ul`
  padding-inline-start: 20px;
`;

export const Episode = styled.li``;
