## **radio-react-native**

a react native javascript components that allow you to create a Radio Button group.




## Installation

	    npm install --save radio-react-native

## Demo

![ezgif-1-e0ecd0dd6a](https://user-images.githubusercontent.com/15144618/37248148-b26296c0-24c1-11e8-8789-5b7984e0aed2.gif)


## Getting Started

    import {Radio, RadioGroup,RadioButton} from "radio-react-native";
    <RadioGroup 
	    defaultChoice={1} 
	    onChoose={(value,index)=>this.onChooseGender(value,index)}
	    >
      <RadioButton value={"M"}>
	      <Text>Male</Text><Radio/> 
      </RadioButton>
      <RadioButton value={"F"}>
         <Radio/><Text> Female</Text>
      </RadioButton>
    </RadioGroup>


## Examples

The Demo section shows Three different examples of the RadioGroup. In this section, I will show you how to use the radio-react-native library.

### Gender example

    <RadioGroup 
	    defaultChoice={1} 
	    style={styles.flexRow} 
	    onChoose={(value,index)=>this.onChooseGender(value,index)}>  
	    <RadioButton 
		    style={[styles.flexRow,styles.center,styles.halfWidth]}
		    value={"M"}>
	      <Text style={styles.text}>Male  </Text>
	      <Radio/> 
	    </RadioButton>
     <RadioButton 
	     style={[styles.flexRow,styles.center,styles.halfWidth]}
	      value={"F"}>  
	      <Radio/>
	      <Text style={styles.text}\> Female</Text>
      </RadioButton>
	</RadioGroup>

In this example, we have a radio form that contains two choices (Male, female). Two RadioButtons wrapped inside the Radio Group. 
Once you click on a radio the event OnChoose is emitted and you can get the value and the index of the choosen radioButton.

### Age example

    const ages = [  
	    {id:1,age:'0 - 2',label:'baby'},
	    {id:2,age:'3 - 8',label:'kid'},
	    {id:'3',age:'9 - 16',label:'teenager'},
	    {id:4,age:'17 - 24',label:'adult'}
    ];
    
    <RadioGroup 
	    defaultChoice={3} 
	    onChoose={(value,index)=>this.onChooseAge(value,index)}>
	    {ages.map((age)=> 
		    <RadioButton 
			    key={age.id} 
			    style={[styles.flexRow,styles.start]} 
			    value={age}>
			    <Radio/>
			    <Text style={styles.text}>{age.label} ({age.age} years old)</Text>
			</RadioButton>
		)}  
		</RadioGroup>
You can also iterate on a list and render a radio Form to choose between many options.

### Custom Radio example

    class ThumpsUp extends Component<Props>{  
  
	    render(){  
	        const {checked} = this.props;  
	        if(checked){  
	            return <Icon 
			            name={"ios-thumbs-up"} 
			            style={{color:'blue'}}/>  
	            }
	            else{  
	            return <Icon 
			            name={"ios-thumbs-up-outline"} />  
	            }  
		    }  
    }
    
    class ThumpsDown extends Component<Props>{  
  
	    render(){  
	        const {checked} = this.props;  
	        if(checked){  
	            return <Icon 
			            name={"ios-thumbs-down"} 
			            style={{color:'red'}}/>  
	            }
	            else{  
	            return <Icon 
			            name={"ios-thumbs-down-outline"} />  
	            }  
		    }  
    }


 ThumpsUp and ThumpsDown are two component defined to be used as a clickable radio in our Radio group.
We need to use the checked props to return the representation of our Radio instead of the default one.


    <RadioGroup 
	    defaultChoice={0} 
	    onChoose={(value,index)=>this.onChooseLike(value,index)}>
	    <RadioButton 
		    style={[styles.flexRow,styles.start]}
		    value={true}>
		    
		    <Radio CustomComponent={ThumpsUp}/>
		    <Text style={styles.text}\> Yes</Text>
		    
	    </RadioButton>
	    
	    <RadioButton 
		    style={[styles.flexRow,styles.start]} 
		    value={false}>
		    
		    <Radio CustomComponent={ThumpsDown}/>
		    <Text style={styles.text}\> No</Text>
		    
	    </RadioButton>
    </RadioGroup>

In this example, we customize the radio to render ThumpsUp adn ThumpsDown instead of the default Radio.