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
  Icon,
  Toast,
} from 'native-base';
import personCtrl from '../../controllers/personController';

const AddPersonPage = props => {
  const [name, setName] = useState('');
  const handleChangeText = e => {
    setName(e);
    console.log(e);
  };
  const handleAddPerson = async () => {
    const persons = await personCtrl.readPersons();
    const person = {
      id: persons.length + 5,
      name: name,
    };
    console.log(person);
    const data = await personCtrl.savePerson(person);
    console.log(data);
    Toast.show({
      text: 'Pessoa Salva',
      buttonText: 'OK',
      duration: 2000,
    });
  };

  return (
    <Container>
      <Header>
        <Left>
          <Button onPress={() => props.navigation.goBack()}>
            <Text>Voltar</Text>
          </Button>
        </Left>
        <Body>
          <Text>Adicionar Pessoa</Text>
        </Body>
      </Header>
      <Content style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Form style={{flex: 1, marginBottom: 10}}>
            <Item floatingLabel>
              <Label>Nome</Label>
              <Input
                placeholder=""
                value={name}
                onChangeText={handleChangeText}
              />
            </Item>
          </Form>
        </View>
        <Button onPress={() => handleAddPerson()} block>
          <Text>Salvar</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default AddPersonPage;
