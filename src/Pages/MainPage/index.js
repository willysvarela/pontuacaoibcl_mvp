import React from 'react';
import {Container, Header, Text, Body, Content, Button} from 'native-base';
const MainPage = props => {
  return (
    <Container>
      <Header>
        <Body>
          <Text>Main Page</Text>
        </Body>
      </Header>
      <Content>
        <Button onPress={() => props.navigation.navigate('Person')}>
          <Text>Go to Person Page</Text>
        </Button>
      </Content>
    </Container>
  );
};
export default MainPage;
