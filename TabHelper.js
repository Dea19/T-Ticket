//This is an example of Tab inside Navigation Drawer in React Native//
import React from 'react';
//import react in our code.
import {
    createAppContainer,
    createStackNavigator,
    createMaterialTopTabNavigator,
} from 'react-navigation';

//Import all the screens for Tab
import HomeScreen from './app/pages/HomeScreen';
import SettingsScreen from './app/pages/SettingsScreen';

const TabScreen = createMaterialTopTabNavigator(
    {
        Home: { screen: HomeScreen },
        Settings: { screen: SettingsScreen },
    },
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#F8F8F8',
            style: {
                backgroundColor: '#FF9800',
            },
            labelStyle: {
                textAlign: 'center',
            },
            indicatorStyle: {
                borderBottomColor: '#87B56A',
                borderBottomWidth: 2,
            },
        },
    }
);
const TabHelper = createStackNavigator({
    TabScreen: {
        screen: TabScreen,
        navigationOptions: {
            header: null,
        },
    },
});
export default createAppContainer(TabHelper);