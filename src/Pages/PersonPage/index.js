/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import commonColor from 'native-base/src/theme/variables/commonColor';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Button,
  Text,
  List,
  ListItem,
  Fab,
  Icon,
} from 'native-base';
import { View } from 'react-native';
//import getRealm from '../../config/realm';
import personController from '../../controllers/personController';

const PersonPage = props => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    async function loadPersons() {
      const res = await personController.readPersons();
      setPersons(res);
    }
    loadPersons();
  }, []);

  /*  const getRealm = () => {
    return Realm.open({
      schema: [PersonSchema],
    });
  };*/

  async function handlePressAddPerson() {
    props.navigation.navigate('AddPerson');
    //await personController.savePerson({id: 4, name: 'Willys'});
  }

  const renderPersonItem = person => {
    return (
      <ListItem>
        <Left>
          <Text>
            <Icon name="airplane" />
          </Text>
        </Left>
        <Body>
          <Text>{person.name}</Text>
        </Body>
      </ListItem>
    );
  };

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
            flex: 1,
          }}>
          <Container
            style={{
              backgroundColor: '#fff',
              flex: 1,
              width: '100%',
            }}>
            <List
              dataArray={persons ? persons : []}
              renderRow={renderPersonItem}
              keyExtractor={(person, id) => String(id)}
            />
          </Container>
        </View>
      </Content>
      <Fab onPress={() => handlePressAddPerson()} style={{ marginBottom: 50 }}>
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
