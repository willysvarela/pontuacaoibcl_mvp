/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect, Component } from 'react';
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
const Realm = require('realm');


const App = () => {
  const [realm, setRealm] = useState(null);
  useEffect(() => {
    return () => {
      Realm.open({
        schema: [{ name: 'Dog', properties: { name: 'string' } }]
      }).then(res => {
        realm.write(() => {
          realm.create('Dog', { name: 'Rex' });
        });
        setRealm(realm);
      });
    };
  });
  const info = realm ? 'Quantidade de Dogs: ' + realm : 'Carregando';
  return (
    <Container>
      <Header>
        <Body>
          <Title>PontoApp IBCL</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text>{info}</Text>
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
