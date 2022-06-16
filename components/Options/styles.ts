import styled from "styled-components";

export const Container = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 600;
  > svg {
    font-size: 1.4rem;
  }
  gap: 0.8em;

  border-radius: 10px;
  padding: 0 10px;

  &:hover {
    background: var(--bg-primary);
    cursor: pointer;
  }
`;
