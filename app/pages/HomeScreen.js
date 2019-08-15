//This is an example of Tab inside Navigation Drawer in React Native//
import React from 'react';
//import react in our code.
import { Text, View } from 'react-native';
import {getData, postData} from "../services/sendData";
// import all basic components

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            test:"This is a test"
        }
    }

    componentWillMount() {
        //getData('https://admin.ebileta.al/event/findGroupEventByName?searchValue=groupEvent').then(res=>console.log(res))
        postData('https://admin.ebileta.al/event/findEventsInSale',{}).then(res=>console.log(res))
        this.setState({test:"This is a new Test"})
    }

    render() {
        const{test}=this.state
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home page from pages > TabPages</Text>
                <Text>{test}</Text>
            </View>
        );
    }
}