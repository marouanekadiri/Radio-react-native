/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    TouchableOpacity,
    View
} from 'react-native';
import Radio from "../Radio/index";


type Props = {
    label:string,
    checked:boolean,
    onCheck:Function,
};

export default class RadioButton extends Component<Props> {

    constructor(props){
       super(props);
       this.state={
           isChecked:this.props.checked,
       }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
           isChecked:nextProps.checked,
        });
    }

    onToggle(){
        this.setState({
            isChecked:!this.state.isChecked
        },()=>this.props.onToggle(this.state.isChecked,this.state.isChecked?this.props.value:null));
    }

    render() {
        let occurOfRadio = 0;
        //clone Radio component to set the checked prop
        let childrens = React.Children.map(this.props.children,(child)=>{
            let returnedChild;
            if(child.type.displayName === 'Radio'){
                occurOfRadio++;
                returnedChild = (
                    <TouchableOpacity onPress={()=>this.onToggle()}>
                        {React.cloneElement(child,{...child.props,checked:this.state.isChecked})}
                    </TouchableOpacity>
                );
            }else{
                returnedChild = child;
            }
            return returnedChild;
        });

        //throw error in case of Radio isn't wrapped
        if(occurOfRadio === 0){
            throw new Error("No Radio component wrapped. Please try to wrap a Radio component in the children of the RadioButton");
        }else if(occurOfRadio>1){
            throw new Error("More then one Radio is wrapped. Please try to wrap only one Radio in the children of the RadioButton");
        }

        return (
            <View style={this.props.style}>
                {childrens}
            </View>
        );
    }
}

RadioButton.defaultProps={
    checked:false,
    onToggle:(check,value)=>undefined,
    value:null,
    children:<Radio/>
};

