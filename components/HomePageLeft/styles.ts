import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 300px;
  flex-direction: column;
  padding-top: 15px;
  padding-left: 15px;

  &:hover {
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px var(--bg-primary);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--bg-primary);

      border-radius: 10px;
    }
  }
`;

export const Division = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--bg-primary);
  margin-top: 10px;
`;

export const ShortCut = styled.div`
  margin-top: 20px;
  height: 98px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .link {
    color: var(--fb-color);
    text-decoration: none;
  }
`;
