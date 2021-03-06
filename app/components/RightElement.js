import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { IconToggle } from 'react-native-material-ui/src';
import { COLOR } from 'react-native-material-ui/src';
export default class RightElement extends Component {

    render() {
        const { onSearchPress, onSearchClear, isSearchActive, searchValue } = this.props;
       // console.log(onSearchPress, isSearchActive)
        if (isSearchActive && searchValue.length === 0) {
            return null;
        }

        const iconProps = {};
        if (isSearchActive && searchValue.length > 0) {
            iconProps.name = 'clear';
            iconProps.color = COLOR.grey600;
            iconProps.onPress = onSearchClear;
        } else {
            iconProps.name = 'search';
            iconProps.color = 'white';
            iconProps.onPress = onSearchPress;
        }

        return (
            <View style={styles.container}>
                <IconToggle {...iconProps} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        /*flex: 1,
        marginLeft: 200,*/
    }
});