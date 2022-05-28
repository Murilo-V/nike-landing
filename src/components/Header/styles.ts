import styled from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100vw;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 7%;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }

  ul {
      display: flex;
      align-items: center;
      justify-content: center;

      li {
          list-style: none;
          margin: 0 1rem;
          font-weight: 500;
          cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
      }
  }
`;