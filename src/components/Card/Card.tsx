import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 12px;
  transition: ${({ theme }) => theme.transitions.smooth};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.sm} 0;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transform: translateY(-5px); /* Slight hover lift */
  }
`;

export default Card;
