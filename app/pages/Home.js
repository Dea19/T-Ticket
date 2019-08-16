//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Text} from 'react-native';
import {SearchBar} from 'react-native-elements';
import TabHelper from "../../TabHelper";
import BottomTabNavigator from "../../BottomTabNavigator";

export default class Home extends Component {

    /*state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({search});
    };*/

    render() {
        return <TabHelper/>;
        /*const {search} = this.state;

        return (
            <SearchBar
                containerStyle={{backgroundColor: 'white'}}
                inputContainerStyle={{backgroundColor: 'pink'}}
                lightTheme
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
            />

        )*/
    }
}
