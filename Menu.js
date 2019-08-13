import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import {Header, Icon} from 'react-native-elements'
import Home from './app/pages/Home';
import Screen2 from './app/pages/Screen2';
import Screen3 from './app/pages/Screen3';
import {system} from './app/config/const'

class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };

    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Icon
                        name='menu'
                        color='#fff'/>
                </TouchableOpacity>
            </View>
        );
    }
}

const Screen1_StackNavigator = createStackNavigator({
    //All the screen from the Home will be indexed here
    First: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: system.title,
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerRight: <Header/>,
            headerTintColor: '#fff',
        }),
    },
});

const Screen2_StackNavigator = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    Second: {
        screen: Screen2,
        navigationOptions: ({ navigation }) => ({
            title: system.title,
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const Screen3_StackNavigator = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Third: {
        screen: Screen3,
        navigationOptions: ({ navigation }) => ({
            title: system.title,
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const DrawerNavigator = createDrawerNavigator({
    Screen1: {
        //Title
        screen: Screen1_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (<Icon name="home" size={24} style={{ color: tintColor }} />),

        },
    },
    Screen2: {
        //Title
        screen: Screen2_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Demo Screen 2',
        },
    },
    Screen3: {
        //Title
        screen: Screen3_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Demo Screen 3',
        },
    },
});

export default createAppContainer(DrawerNavigator);