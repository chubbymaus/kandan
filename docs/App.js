import React from 'react'

import { Button, BtnPrimaryOtl, BtnSuccessOtl, BtnDangerOtl, BtnWarningOtl, BtnAlternateOtl,
  BtnDanger, 
  BtnPrimary, 
  BtnSuccess,
  BtnAlternate,
  BtnWarning, Card, Container} from 'kandan'



const App = () => {
  return(
  <div>
  <Container>
  <Card hasShadow>
  <h3>Decentralized data drive</h3>
            <hr/>
            <p>A company can store and manage their data on Squibly’s
             decentralized database for optimal security. Capable of storing 
             videos, pictures, music, and files. Companies can create permissions for 
             individual employees, team channels, or the entire company workspace 
             to access their data. Squibly’s built in automations make storing 
             data on the drive seamless and simple.</p>
  <BtnPrimary hasShadow firstChildLeft>Hello world</BtnPrimary>
  <BtnSuccess >hello world</BtnSuccess>
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
  </Container>

  <BtnDanger>hello world</BtnDanger>
  <BtnWarning>Hello world</BtnWarning>
  <BtnAlternate>hello world</BtnAlternate>
  <BtnPrimaryOtl>Hello world</BtnPrimaryOtl>
  <BtnSuccessOtl>hello world</BtnSuccessOtl>
  <BtnDangerOtl>hello world</BtnDangerOtl>
  <BtnWarningOtl>Hello world</BtnWarningOtl>
  <BtnAlternateOtl>hello world</BtnAlternateOtl>
  
  </div>
  )
}

export default App