import styled from 'styled-components';
import { Colors } from '../colors';

export const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 2px solid transparent;
    box-shadow: ${props => props.hasShadow ? '0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);' : 'none'};
    margin: 1em;
    padding: 0.5em 1em;
    margin-left: ${props => props.firstChildLeft ? '0': '1em'};
    margin-right: ${props => props.firstChildRight ? '0': '1em'};
    width: ${props => props.btnWidth ? props.btnWidth: 'auto'};
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    border-radius: .20rem;
    transition: color .10s ease-in-out,background-color .10s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;


    @media (max-width: 768px){
        margin: 0.5rem ;
    }
`;

export const BtnPrimary = Button.extend `
  color: #fff;
  background-color: ${props => props.color ? props.color : Colors.primary};
  background-image: none;
  border-color: ${props => props.color ? props.color : Colors.primary};
`;

export const BtnSuccess = Button.extend `
  color: #fff;
  background-color: ${props => props.color ? props.color : Colors.success};
  background-image: none;
  border-color: ${props => props.color ? props.color : Colors.success};
`;

export const BtnDanger = Button.extend `
  color: #fff;
  background-color: ${props => props.color ? props.color : Colors.danger};
  background-image: none;
  border-color: ${props => props.color ? props.color : Colors.danger};
`;

export const BtnInfo = Button.extend `
  color: #fff;
  background-color: ${props => props.color ? props.color : Colors.info};
  background-image: none;
  border-color: ${props => props.color ? props.color : Colors.info};
`;


export const BtnPrimaryOtl = Button.extend `
  color: ${props => props.color ? props.color : Colors.primary};
  background-color: transparent;
  background-image: none;
  border-color: ${props => props.color ? props.color : Colors.primary};
    &: hover {
    background-color:${props => props.color ? props.color : Colors.primary};
    color: #fff;
  }
`;

export const BtnSuccessOtl = Button.extend `
  color: ${props => props.color ? props.color : Colors.success};
  background-color: transparent;
  background-image: none;
  border-color: ${props => props.color ? props.color : Colors.success};
    &: hover {
    background-color: ${props => props.color ? props.color : Colors.success};
    color: #fff;
  }
`;

export const BtnDangerOtl = Button.extend `
  color: ${props => props.color ? props.color : Colors.danger};
  background-color: transparent;
  background-image: none;
  border-color: ${props => props.color ? props.color : Colors.danger};
    &: hover {
    background-color: ${props => props.color ? props.color : Colors.danger};
    color: #fff;
  }
`;
export const BtnInfoOtl = Button.extend `
  color: ${props => props.color ? props.color : Colors.info};
  background-color: transparent;
  background-image: none;
  border-color: ${props => props.color ? props.color : Colors.info};
    &: hover {
    background-color: ${props => props.color ? props.color : Colors.info};
    color: #fff;
  }
`;
