
import React, { Component } from 'react';
import BottomTabNavigator from "../../BottomTabNavigator";
import {StyleSheet, Text, View} from "react-native";



export default class MyTickets extends Component {

    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={{ fontSize: 23 }}> My Tickets </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center',
    },
});