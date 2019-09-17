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
      <Content style={{backgroundColor: '#000'}}>
        <Text>Oe</Text>
      </Content>
    </Container>
  );
};
export default MainPage;
