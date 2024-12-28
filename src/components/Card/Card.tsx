import styled from "styled-components";

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px); /* Slight hover lift */
  }
`;

export default Card;
