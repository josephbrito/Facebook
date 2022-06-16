import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  background: var(--header);
  padding: 8px;
  width: 500px;
  border-radius: 10px;
`;

export const WriteBox = styled.div`
  display: flex;
  gap: 0.8em; ;
`;

export const Photo = styled.div``;

export const Input = styled.input`
  background: var(--bg-primary);
  border: none;
  border-radius: 20px;
  outline: none;
  width: 100%;
  color: var(--color);
  padding: 0 15px;
  &::placeholder {
    color: var(--color-gray);
    font-size: 1.3em;
  }
`;

export const Actions = styled.div`
  margin-top: 10px;

  display: flex;
  gap: 0.7em;
  align-items: center;
`;

export const Action = styled.div`
  width: 100%;
  display: flex;
  gap: 0.6em;
  justify-content: center;
  cursor: pointer;

  > svg {
    font-size: 1.3rem;
  }
`;

export const ActionName = styled.p`
  font-size: 1em;
  color: var(--color-gray);
`;
