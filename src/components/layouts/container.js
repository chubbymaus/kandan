import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 35px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-flow: row wrap;
  
    @media (min-width: 768px) {
        width: 750px;
    }
    @media (min-width: 992px) {
        padding-right: 15%;
        padding-left: 15%;
        width: 960px;
    }
    @media (min-width: 1200px) {
        padding-right: 5%;
        padding-left: 5%;
        width: 1170px;
    }
`;

