import styled from "styled-components";

export const SelectWrapper = styled.select`
  background-color: ${({ theme }) => theme.color.grey};
  border-radius: 6px;
  padding: 4px;
  font-size: ${({ theme }) => theme.size.medium};

  color: ${({ theme }) => theme.color.darkGrey};
  border: none;
`;
export const Option = styled.option`
  border-radius: 12px;
  color: ${({ theme }) => theme.color.darkGrey};
  font-size: ${({ theme }) => theme.size.medium};
`;

export const SelectLabel = styled.label`
  color: ${({ theme }) => theme.color.darkGrey};
  font-family: ${({ theme }) => theme.family.semiBold};
  margin-right: 6px;
`;
