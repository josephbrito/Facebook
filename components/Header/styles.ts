import styled from "styled-components";

export const Container = styled.header`
  max-height: 8vh;
  width: 100vw;
  background: var(--header);
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--bg-primary);
  justify-content: space-between;
  padding: 0 20px;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  justify-content: center;
  background: var(--bg-primary);
  height: 40px;
  width: 200px;
  border-radius: 45px;
`;

export const Search = styled.input`
  background: var(--bg-primary);
  border: none;

  outline: none;
  color: var(--color);

  &::placeholder {
    color: var(--color);
    font-size: 0.9em;
  }
`;

export const Center = styled.div`
  display: flex;
  gap: 0.3em;
  align-items: center;

  font-size: 1.7rem;
  > div {
    color: var(--color);
    padding: 8px 30px;
    border-radius: 10px;
    &:hover {
      background: var(--bg-primary);
      cursor: pointer;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 1.3rem;
  > div {
    padding: 8px 10px;
    background: var(--bg-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .profile {
    height: 80%;
    display: flex;
    align-items: center;
    gap: 0.7em;
    font-size: 0.8em;
    padding: 0;
    background: none;
    border-radius: 20px;
    padding: 2px 10px;
    &:hover {
      background: var(--bg-primary);
    }
    > div {
      display: flex;
      align-items: center;
      height: 35px;

      width: 35px;
      .photo {
        border-radius: 50%;
      }
    }
  }
`;
