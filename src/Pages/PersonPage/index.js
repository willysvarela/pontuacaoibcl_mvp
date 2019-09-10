/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import commonColor from 'native-base/src/theme/variables/commonColor'
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

import PersonSchema from '../../schemas/PersonSchema';
import { FlatList } from 'react-native-gesture-handler';

const Realm = require('realm');

const PersonPage = (props) => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        async function loadPersons() {
            const realm = await getRealm();
            const data = realm.objects('Person');
            setPersons(data);
        }
        loadPersons();
    }, []);

    const getRealm = () => {
        return Realm.open({
            schema: [PersonSchema]
        });
    }

    const savePerson = async (person) => {
        const realm = await getRealm();

        realm.write(() => {
            realm.create('Person', person, 'modified');
        });
        const data = realm.objects('Person');
        setPersons(data); 
    }

    async function handleAddPerson() {

        await savePerson({ id: 4, name: 'Willys' });
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
        <Content style={{backgroundColor: '#ccc'}}>
            <Container style={{backgroundColor: commonColor.brandPrimary, height: 40}} />
            <Container style={{width: '90%', align: 'center', backgroundColor: "#fff", marginTop: -40}}> 
                <FlatList>  

                </FlatList>
            </Container>
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
