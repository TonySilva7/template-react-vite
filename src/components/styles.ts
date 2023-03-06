import styled from 'styled-components';

export const Button = styled.button<{ bg?: string }>`
  background-color: ${({ bg }) => bg ?? 'pink'};
  color: ${({ theme }) => theme.colors.text.medium};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
`;
