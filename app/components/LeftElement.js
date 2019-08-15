import React, {Component} from 'react';
import {IconToggle, COLOR} from 'react-native-material-ui/src';
import {View, Image, TouchableOpacity, Animated, StyleSheet, Platform} from 'react-native';
import Easing from "react-native-web/src/vendor/react-native/Animated/Easing";
import {Icon, Text} from "react-native-elements";
//import NavigationDrawer from "../../Menu";

const styles = StyleSheet.create({
    container: {
       /* flex: 1,
        //marginLeft: 130,*/
    }
});
export default class LeftElement extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            leftElement: 'menu',
            spinValue: new Animated.Value(0),
        };
    }

    componentWillReceiveProps(nextProps) {
        // goes to search state
        if (nextProps.isSearchActive && !this.props.isSearchActive) {
            this.animate({toValue: 1, leftElement: 'arrow-forward'});
        }
        // goes to default look
        if (!nextProps.isSearchActive && this.props.isSearchActive) {
            this.animate({toValue: 0, leftElement: 'menu'});
        }
    }

    animate = ({toValue, leftElement}) => {
        Animated.timing(this.state.spinValue, {
            toValue: 0.5,
            duration: 112,
            easing: Easing.linear,
            useNativeDriver: Platform.OS === 'android',
        }).start(() => {
            this.setState({leftElement});

            Animated.timing(this.state.spinValue, {
                toValue,
                duration: 112,
                easing: Easing.linear,
                useNativeDriver: Platform.OS === 'android',
            }).start();
        });
    }

    toggleDrawer = () => {
        //Props to open/close the drawer
        console.log(this.props)
        //this.props.navigationProps.toggleDrawer();
    };


    render() {
        const {leftElement, spinValue} = this.state;
        const {isSearchActive, onSearchClose, onMenuPress} = this.props;

        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg'],
        });

        //console.log(leftElement)
        return (
            <Animated.View style={[styles.container, {transform: [{rotate: spin}]}]}>
                <IconToggle
                    name={leftElement}
                    color={isSearchActive ? COLOR.grey600 : 'white'}
                    onPress={leftElement == 'menu' ? onMenuPress : onSearchClose}
                />
            </Animated.View>
        );
    }

}
