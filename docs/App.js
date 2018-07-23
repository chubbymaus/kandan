import React from 'react'

import { Button, BtnPrimaryOtl, BtnSuccessOtl, BtnDangerOtl, 
  BtnDanger, 
  BtnPrimary,
  BtnInfo,
  BtnInfoOtl, 
  BtnSuccess,
 Card, Container, Navbar} from 'kandan'
import { Colors } from '../src/components/colors';
import styled from 'styled-components';
import {injectGlobal} from 'styled-components'

injectGlobal `
  @font-face {
    font-family: 'Ubuntu', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Ubuntu:300,400');
  }

  body {
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
  }
`;


const App = () => {
  return(
 
  <div>
  <Navbar>
   <p>test</p>
  </Navbar>
  <Container>
  <div>
  <Card hasShadow hrColor={Colors.success}>
  <h3>Decentralized data drive</h3>
            <hr />
            <p>A company can store and manage their data on Squibly’s
             decentralized database for optimal security. Capable of storing 
             videos, pictures, music, and files. Companies can create permissions for 
             individual employees, team channels, or the entire company workspace 
             to access their data. Squibly’s built in automations make storing 
             data on the drive seamless and simple.</p>
  <BtnPrimary hasShadow firstChildLeft>Hello world</BtnPrimary>
  <BtnSuccess hasShadow>hello world</BtnSuccess>
  </Card>
  <Card hasShadow>
  <h3>Decentralized data drive</h3>
            <hr/>
            <p>A company can store and manage their data on Squibly’s
             decentralized database for optimal security. Capable of storing 
             videos, pictures, music, and files. Companies can create permissions for 
             individual employees, team channels, or the entire company workspace 
             to access their data. Squibly’s built in automations make storing 
             data on the drive seamless and simple.</p>
  <BtnPrimary hasShadow>Hello world</BtnPrimary>
  <BtnSuccess>hello world</BtnSuccess>
  </Card>
  </div>
<BtnSuccess>hello world</BtnSuccess>
  <BtnDanger>hello world</BtnDanger>

  <BtnInfo>hello world</BtnInfo>
  <BtnPrimaryOtl>Hello world</BtnPrimaryOtl>
  <BtnSuccessOtl>hello world</BtnSuccessOtl>
  <BtnDangerOtl>hello world</BtnDangerOtl>
  <BtnInfoOtl>hello world</BtnInfoOtl>

  </Container>
  </div>
  
  )
}

export default App