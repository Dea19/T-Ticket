import React, { Component } from 'react';
import { COLOR } from 'react-native-material-ui/src';
import {View, Image, TouchableOpacity, Animated, StyleSheet, Platform, TextInput, FlatList} from 'react-native';
import Easing from "react-native-web/src/vendor/react-native/Animated/Easing";
import {Text} from "react-native-elements";
import SearchableDropdown from 'react-native-searchable-dropdown';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 22,

    },
    text: {
        fontWeight: '500',
        fontSize: 20,
        color: 'white',
    },
    /*input: {
        width: 300,
        height: 44,
        padding: 10,
        marginBottom: 10,
    },*/
});

export default class CenterElement extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            textInput: props.isSearchActive,
            opacityValue: new Animated.Value(1),
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.isSearchActive !== nextProps.isSearchActive) {
            this.animateElements(nextProps.isSearchActive);
        }
    }
    animateElements = (nextIsSearchActive) => {
        Animated.timing(this.state.opacityValue, {
            toValue: 0,
            duration: 112,
            easing: Easing.linear,
            useNativeDriver: Platform.OS === 'android',
        }).start(() => {
            this.setState({
                textInput: nextIsSearchActive,
            });


            Animated.timing(this.state.opacityValue, {
                toValue: 1,
                duration: 112,
                easing: Easing.linear,
                useNativeDriver: Platform.OS === 'android',
            }).start();
        });
    }


    render() {
        const { title, onSearchTextChange, searchValue, isSearchActive } = this.props;
        const { opacityValue, textInput} = this.state;

        const color = isSearchActive ? COLOR.grey600 : 'white';

        let content = <Text style={[styles.text, { color }]}>{title}</Text>;

        if (textInput) {
            content = ( <View>
                <TextInput
                placeholder="Search"
                onChangeText={onSearchTextChange}
                value={searchValue}
               // style={styles.input}
                />
            </View>
            )
        }
       // console.log(textInput)
        return (
            <Animated.View style={[styles.container, { opacity: opacityValue }]}>
                {content}
            </Animated.View>
        );
    }
}
