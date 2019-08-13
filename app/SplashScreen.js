import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'


export default class SplashScreen extends React.Component {
    render() {

        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                source={require('./assets/bulb.png')}/>
                <Text style={styles.welcome}>
                    eBileta
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#616f98',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
    icon: {
        width: 70,
        height: 70,

    }
});