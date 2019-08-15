import React, { Component, PureComponent } from 'react';
import { COLOR } from 'react-native-material-ui/src';
import {Header, Icon} from 'react-native-elements'

import LeftElement from './LeftElement';
import CenterElement from './CenterElement';
import RightElement from './RightElement';
import { View, Image, TouchableOpacity, StyleSheet, Animated, Platform } from 'react-native';
import Easing from "react-native-web/src/vendor/react-native/Animated/Easing";

const styles = StyleSheet.create({
    container: {
       // position: 'absolute',
      //  top: 0,
      //  left: 0,
       // right: 0,
       // height: 80,
       // backgroundColor: COLOR.green500,
       // elevation: 4,
    },
    statusBar: {
        height: 7,
    },
    toolbarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8,
        height: 56,
        flex: 1,
    },
});

export default class CustomHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { isSearchActive: false, searchValue: '' };

        this.onSearchPressed=this.onSearchPressed.bind(this)
        this.onSearchClosed=this.onSearchClosed.bind(this)
    }
    onSearchPressed = () => {
        this.setState({ isSearchActive: true });
    }
    onSearchTextChanged = (searchValue) => {
        this.setState({ searchValue });
    }
    onSearchClearPressed = () => {
        this.onSearchTextChanged('');
    }
    onSearchClosed = () => {
        this.setState({ isSearchActive: false, searchValue: '' });
        //this.props.navProps()
    }

    onMenuPressed = () => {
        this.props.navProps()
    }

    componentWillMount() {
console.log(this.props)
    }

    render() {
        const { isSearchActive, searchValue } = this.state;

        return (

            <View style={[styles.container, isSearchActive && { backgroundColor: 'white' }]} >
                <View style={styles.statusBar} />
                <View style={styles.toolbarContainer}>
                    <LeftElement
                        isSearchActive={isSearchActive}
                        onSearchClose={this.onSearchClosed}
                        onMenuPress = {this.onMenuPressed}
                    />
                    <CenterElement
                        title="Animation"
                        isSearchActive={isSearchActive}
                        searchValue={searchValue}
                        onSearchTextChange={this.onSearchTextChanged}

                    />
                    <RightElement
                        isSearchActive={isSearchActive}
                        onSearchPress={this.onSearchPressed}
                        searchValue={searchValue}
                        onSearchClear={this.onSearchClearPressed}
                    />
                </View>
            </View>
        );
    }
}