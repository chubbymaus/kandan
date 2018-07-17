import styled from 'styled-components';

export const Container = styled.div`
 
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
    @media(max-width: 599 px) {
        width: 85% ;
    }
    @media (min-width: 600px) {
        width: 85%;
    }
    @media (min-width: 992px) {
   
        width: 80%;
    }
    @media (min-width: 1200px) {
       
        width: 80%;
    }
`;

