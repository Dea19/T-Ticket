//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
import BottomTabNavigator from "../../BottomTabNavigator";
// import all basic components

export default class Screen3 extends Component {
    //Screen3 Component
    render() {
        return (
           <BottomTabNavigator/>
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