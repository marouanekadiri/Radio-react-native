/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {RadioCircle} from "../../UI/index";


type Props = {
    checked:boolean
};

export default class Radio extends Component<Props> {


    render() {
        const {CustomComponent, checked} =this.props;
        return (
            <CustomComponent checked={checked}/>
        );
    }
}

Radio.defaultProps={
    CustomComponent:RadioCircle,
};