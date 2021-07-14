import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: ${({ theme }) => theme.color.darkGrey};

  border: solid 2px white;
  &:hover {
    transform: scale(1.07);
    border: solid 2px ${({ theme }) => theme.color.darkGrey};
  }
`;
export const ImageSide = styled.div`
  display: flex;
  position: relative;
`;

export const ContentSide = styled.div`
  display: flex;
  flex: 0.6;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-top: 6px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;



export const StatusLine = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageBottom = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 0.9) 0%,
    rgba(14, 14, 17, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  width: 100%;
`;

export const NameWrapper = styled.div`
  padding: 8px;
`;
export const Row = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;
