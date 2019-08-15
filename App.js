import React from 'react';
import SplashScreen from "./app/SplashScreen";
import NavigationDrawer from "./Menu";
import CustomHeader from "./app/components/CustomHeader";



export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoading: true
        }
    }

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.setState({isLoading: false});
        }
    }

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => {
                    resolve('result')
                },
                2000
            )
        );
    }

    render() {
        if (this.state.isLoading) {
            return <SplashScreen/>;
        }
        return (
            <NavigationDrawer/>
        //   <CustomHeader/>


        );
    }


}

