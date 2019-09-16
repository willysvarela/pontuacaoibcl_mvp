/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
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
  Fab,
  Icon,
} from 'native-base';
import {View, FlatList} from 'react-native';
import personController from '../../controllers/personController';

const PersonPage = props => {
  const [persons, setPersons] = useState([]);

  async function loadPersons() {
    const res = await personController.readPersons();
    return res;
  }

  async function handlePressAddPerson() {
    props.navigation.navigate('AddPerson');
  }

  const info = persons ? 'Quantidade de Dogs: ' + persons.length : 'Carregando';
  return (
    <Container>
      <Header>
        <Body>
          <Title>PontoApp IBCL</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <View
          style={{
            backgroundColor: '#ccc',
            display: 'flex',
            alignItems: 'center',
          }}>
          <Container
            style={{
              backgroundColor: '#fff',
              width: '100%',
            }}>
            <Text>{persons.length}</Text>
            <FlatList
              data={persons}
              renderItem={({item: person}) => <Text>{person.name}</Text>}
            />
            <Button onPress={() => loadPersons()}>
              <Text>Atualizar</Text>
            </Button>
          </Container>
        </View>
      </Content>
      <Fab onPress={() => handlePressAddPerson()} style={{marginBottom: 50}}>
        <Icon name="add" />
      </Fab>
      <Footer>
        <FooterTab>
          <Button active>
            <Text>Pessoas</Text>
          </Button>
          <Button onPress={() => props.navigation.goBack()}>
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
export default PersonPage;
