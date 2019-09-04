/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Right,
  Body,
  Button,
  Text,
} from 'native-base';

const App = () => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>PontoApp IBCL</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text>Olá</Text>
      </Content>
      <Footer>
        <FooterTab>
          <Button active>
            <Text>Pessoas</Text>
          </Button>
          <Button>
            <Text>Chamadas</Text>
          </Button>
          <Button> 
            <Text>Relatórios</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default App;
