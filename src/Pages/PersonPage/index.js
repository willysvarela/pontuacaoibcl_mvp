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
  Icon,
  Form,
  Item,
  Label,
  Input,
  Toast,
} from 'native-base';
import {View, FlatList, StyleSheet} from 'react-native';
import personController from '../../controllers/personController';
import getRealm from '../../config/realm';
const style = StyleSheet.create({
  personItemStyle: {
    padding: 20,
    fontSize: 16,
  },
});

const PersonPage = props => {
  const [persons, setPersons] = useState([{id: 1, name: 'Willys'}]);
  const [person, setPerson] = useState({id: 0, name: ''});

  useEffect(() => {
    async function loadPersons() {
      const realm = await getRealm();
      const list = realm.objects('Person');
      //const list = await personController.readPersons();
      setPersons(list);
    }
    loadPersons();
  }, []);

  const renderPersonItem = person => {
    return (
      <View style={style.personItemStyle}>
        <Text>{person.name}</Text>
      </View>
    );
  };

  async function handleAddPerson() {
    /*const data = await personController.savePerson({
      id: persons.length + 10,
      name: person.name,
    });*/
    const realm = await getRealm();
    realm.write(() => {
      realm.create(
        'Person',
        {
          id: persons.length + 10,
          name: person.name,
        },
        'modified',
      );
    });
  }

  const handleChangeText = e => {
    setPerson(prevState => ({id: prevState.id, name: e}));
  };

  //const info = persons ? 'Quantidade de Dogs: ' + persons.length : 'Carregando';
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
            <View>
              <View>
                <Form style={{marginBottom: 10}}>
                  <Item floatingLabel>
                    <Label>Nome</Label>
                    <Input
                      placeholder=""
                      value={person.name}
                      onChangeText={handleChangeText}
                    />
                  </Item>
                </Form>
              </View>
              <Button onPress={() => handleAddPerson()} block>
                <Text>Salvar</Text>
              </Button>
            </View>
            <FlatList
              data={persons}
              renderItem={({item}) => renderPersonItem(item)}
              keyExtractor={item => String(item.id)}
            />
            <Button onPress={() => console.log('press')}>
              <Text>Atualizar</Text>
            </Button>
          </Container>
        </View>
      </Content>
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
