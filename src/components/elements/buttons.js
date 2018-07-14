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
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    border-radius: .20rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    @media (max-width: 768px){
        margin: 1em;
    }
`;

export const BtnPrimary = Button.extend `
  color: #fff;
  background-color: ${props => props.color ? props.color : Colors.primary};
  background-image: none;
  border-color: ${props => props.color ? props.color : Colors.primary};
    &: hover {
    background-color:${props => props.color ? props.color : Colors.primaryHover};
    border-color: ${props => props.color ? props.color : Colors.primaryHover};
    color: #fff;
  }
`;

export const BtnSuccess = Button.extend `
  color: #fff;
  background-color: ${props => props.color ? props.color : Colors.success};
  background-image: none;
  border-color: ${props => props.color ? props.color : Colors.success};
    &: hover {
    background-color: ${props => props.color ? props.color : Colors.successHover};
    border-color: ${props => props.color ? props.color : Colors.successHover};
    color: #fff;
  }
`;

export const BtnDanger = Button.extend `
  color: #fff;
  background-color: ${props => props.color ? props.color : Colors.danger};
  background-image: none;
  border-color: ${props => props.color ? props.color : Colors.danger};
    &: hover {
    background-color: ${props => props.color ? props.color : Colors.dangerHover};
    border-color:${props => props.color ? props.color : Colors.dangerHover};
    color: #fff;
  }
`;

export const BtnAlternate = Button.extend `
  color: #fff;
  background-color: ${props => props.color ? props.color : Colors.alternate};
  background-image: none;
  border-color: ${props => props.color ? props.color : Colors.alternate};
    &: hover {
    background-color: ${props => props.color ? props.color : Colors.alternateHover};
    border-color: ${props => props.color ? props.color : Colors.alternateHover};
    color: #fff;
  }
`;

export const BtnWarning = Button.extend `
  color: #fff;
  background-color: ${props => props.color ? props.color : Colors.warning};
  background-image: none;
  border-color: ${props => props.color ? props.color : Colors.warning};
    &: hover {
    background-color: ${props => props.color ? props.color : Colors.warningHover};
    border-color: ${props => props.color ? props.color : Colors.warningHover};
    color: #fff;
  }
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

export const BtnAlternateOtl = Button.extend `
  color: ${props => props.color ? props.color : Colors.alternate};
  background-color: transparent;
  background-image: none;
  border-color: ${props => props.color ? props.color : Colors.alternate};
    &: hover {
    background-color: ${props => props.color ? props.color : Colors.alternate};
    color: #fff;
  }
`;

export const BtnWarningOtl = Button.extend `
  color: ${props => props.color ? props.color : Colors.warning};
  background-color: transparent;
  background-image: none;
  border-color: ${props => props.color ? props.color : Colors.warning};
    &: hover {
    background-color: ${props => props.color ? props.color : Colors.warning};
    color: #fff;
  }
`;