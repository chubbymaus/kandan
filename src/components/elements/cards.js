import styled from 'styled-components';
import { Colors } from '../colors';

export const Card = styled.div`
    background-color: #fefefe;
    box-shadow: ${props => props.hasShadow ? '0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);' : 'none'};
    padding: 2rem;
    font-family: 'Ubuntu', sans-serif;
    border-radius: .20rem;
    margin: 1rem .5rem;
    
    h1, h2, h3 {
        margin-bottom: .5rem;
    }
    hr{
        
        height: 5px;
        color: ${Colors.alternate};
        background: ${props => props.hrColor ? props.hrColor  : Colors.danger};
        border: none;
        max-width: 75px;
        margin: 0px;
    }
`;