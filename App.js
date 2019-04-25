/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Wampy from "wampy";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
    componentDidMount() {
        const url = "ws://127.0.0.1:9090/ws";

        const ws = new Wampy(url, {
            realm: "realm1",
            ws: WebSocket,
            debug: true,
            onConnect: () => {
                console.log("WAMP onConnect");
            },
            onClose: () => {
                console.log("WAMP onClose");
            },
            onError: () => {
                console.log("WAMP onError");
            },
        });

        console.log(ws.getOpStatus());
        console.log(ws.getSessionId());
        console.log(ws);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
