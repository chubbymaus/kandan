import styled from 'styled-components';
import { Colors } from '../colors';

export const Navbar = styled.nav`
  height: 60px;
  background-color: ${props => props.navColor ? props.navColor : Colors.light}
  display: flex;
  padding: 0 5rem;
`;