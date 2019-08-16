import {createAppContainer, createBottomTabNavigator, createStackNavigator} from "react-navigation";
import MyTickets from "./app/pages/MyTickets";
import Account from "./app/pages/Account";

const BottomTabScreen = createBottomTabNavigator({
    MyTickets: { screen: MyTickets },
    Account: { screen: Account },
}, {
    initialRouteName: 'MyTickets',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
});

const BottomTabNavigator = createStackNavigator({
    TabScreen: {
        screen: BottomTabScreen,
        navigationOptions: {
            header: null,
        },
    },
});
export default createAppContainer(BottomTabNavigator);