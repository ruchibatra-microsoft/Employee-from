import React,{Component} from 'react'
import {Text,View,TouchableOpacity} from 'react-native'
import {CardSection} from './common'
import { Actions } from 'react-native-router-flux';

class ListItem extends Component{
  onPressButton(){
    console.log("oresses");
    Actions.employeeEdit({employee:this.props.employee});
  }
  render(){
    const {name}= this.props.employee;
    return (
      <TouchableOpacity onPress={this.onPressButton.bind(this)}>
      <CardSection>
        <Text style={styles.textStyle}>
          {name}
        </Text>
      </CardSection>
      </TouchableOpacity>
    )
  }
}

const styles={
  textStyle:{
    fontSize:20,
    margin:10
  }
}

export default ListItem;