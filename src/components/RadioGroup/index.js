/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import { RadioButton } from "../../index";

type Props = {
};

export default class RadioGroup extends Component<Props> {

    constructor(props){
        super(props);
        this.state={
            selectedIndex:this.props.defaultChoice,
            value:null
        }
    }

    onSelect(value,index){
        this.setState({
            selectedIndex:index,
            value:value
        },()=>this.props.onChoose(value,index));
    }

    render() {
        return (
            <View style={this.props.style}>
                {React.Children.map(this.props.children,(child,index)=>{
                    let clonedChild;
                    if(child.type === RadioButton){
                        clonedChild = React.cloneElement(child,
                            {...child.props,
                                checked:this.state.selectedIndex === index,
                                onToggle:(checked,value)=>{this.onSelect(child.props.value,index);child.props.onToggle(checked,value)}});
                    }else{
                        throw new Error("The "+child.type.displayName + " element should not be wrapped inside the RadioGroup. Check if all the wrapped element in the RadioGroup are of type RadioButton");
                    }
                    return clonedChild;
                })}
            </View>
        );
    }
}

RadioGroup.defaultProps={
    onChoose:(value,index)=>undefined,
    defaultChoice:0,
};