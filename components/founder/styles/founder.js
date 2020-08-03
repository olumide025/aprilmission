import styled from 'styled-components';

export const Container = styled.section`
  background-color: #202120;
`;

export const Title = styled.div`
    font-size: 16px;
    color: #f67d4a;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: center;
    & h2{
      color:#898888;
    }
    & div:last-of-type{
      margin: 0px auto 30px;
      height:3px;
      width: 80px;
      background: #f67d4a;
    }
}
`;
export const Frame = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 80px auto 0;
  padding: 3% 5%;
  & ul.alice-carousel__stage {
    display: grid !important;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto auto;

    @media (min-width: 1300px) {
      justify-content: center;
    }
  }
  & span h3,
  span p {
    font-size: 16px;
    color: #898888;
    text-align: center;
  }
`;
