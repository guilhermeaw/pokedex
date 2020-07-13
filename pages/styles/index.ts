import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const PokeList = styled.div`
  border-radius: 8px;
  padding: 32px 56px;
  margin-bottom: 56px;

  display: flex;
  flex-direction: column;

  ul {
    margin-top: 16px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 24px 24px;

    li {
      display: flex;
      flex: 1;
      justify-content: center;

      background: #fff;
      height: 320px;
      border-radius: 4px;
      padding: 24px 32px;
      box-shadow: 3px 3px 6px #aaaaaa;
      cursor: pointer;
      transition: box-shadow 0.3s;

      &:hover {
        box-shadow: 5px 5px 10px #aaaaaa;
      }
    }
  }
`;

export const PokeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-weight: bold;
  }
`;
