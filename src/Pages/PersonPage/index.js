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

import PersonSchema from '../../schemas/PersonSchema';

const Realm = require('realm');

const PersonPage = () => {
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
            <Content>
                <Text>{info}</Text>
                <Button onPress={handleAddPerson}><Text>Add</Text></Button>
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
export default PersonPage;
