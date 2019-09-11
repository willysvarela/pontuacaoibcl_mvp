import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Text,
  Form,
  Item,
  Input,
  Label,
  Button,
} from 'native-base';
import getRealm from '../config/realm';

const AddPersonPage = props => {
  const [name, setName] = useState('initialState');

  const handleAddPerson = () => {};
  const handleKeyPress = e => {};
  return (
    <Container>
      <Header transparent>
        <Left />
        <Body>
          <Text>Adicionar Pessoa</Text>
        </Body>
      </Header>
      <Content />
      <Form>
        <Item floatingLabel>
          <Label>Nome</Label>
          <Input
            placeholder="Nome"
            value={name}
            onKeyPress={e => handleKeyPress(e)}
          />
        </Item>
        <Button onPress={() => handleAddPerson()} block>
          Salvar
        </Button>
      </Form>
    </Container>
  );
};

export default AddPersonPage;
