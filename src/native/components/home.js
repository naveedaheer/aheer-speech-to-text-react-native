import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle, Text } from 'native-base';

const FilePickerManager = require('NativeModules').FilePickerManager;

export default class HeaderComponent extends Component {


    constructor() {
        super();
        this.state = {
            file: ''
        }
        this.audioPicker.bind(this)
    }

    audioPicker() {
        FilePickerManager.showFilePicker(null, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled file picker');
            }
            else if (response.error) {
                console.log('FilePickerManager Error: ', response.error);
            }
            else {
                this.setState({
                    file: response
                });
            }
        });
    }


    render() {

        return (
            <Container style={{ marginTop: 40, padding: 10 }} >

                <Button
                onPress={() => this.audioPicker()}
                    transparent >
                    <Text>Browse Audio</Text>
                </Button>

                <Text multiline={true}
                    numberOfLines={8} >
                    This is sample text area
                </Text>

            </Container>
        );
    }
}