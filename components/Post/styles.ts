import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  padding: 20px;
  border-radius: 15px;
  gap: 1em;
  background: var(--story-color);
  color: var(--color);
`;

export const Info = styled.div`
  display: flex;
`;

export const Message = styled.p`
  font-size: 1.3rem;
  color: var(--color);
`;

export const Icons = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: space-around;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8em;
  cursor: pointer;
`;
