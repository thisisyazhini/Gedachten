import { styled } from 'goober';

export const Button = styled('button')`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primaryContent};
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;
