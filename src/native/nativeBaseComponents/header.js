import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle } from 'native-base';

export default class HeaderComponent extends Component {
    render() {
        return (

            <Header>
                <Left>
                <Image source={require('./../../images/naveed.png')}
                style={{ width: 50, height: 50, borderRadius:30 }} />
                </Left>
                <Body>
                    <Title>Aheer Intelligent App</Title>
                    <Subtitle>Audio To Text</Subtitle>
                </Body>
                {/* <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right> */}
            </Header>

        );
    }
}