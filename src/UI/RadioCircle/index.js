/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import styles from "./index.style";


type Props = {
    checked:boolean
};

export default class RadioCircle extends Component<Props> {


    render() {
        return (
            <View style={[styles.outCircle,styles.center]}>
                {this.props.checked?
                    <View style={styles.inCircle}>
                    </View>
                    :null}
            </View>
        );
    }
}