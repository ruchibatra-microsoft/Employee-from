import React ,{Component} from "react"
import {CardSection,Card,Input} from './common'
import {connect} from 'react-redux'
import {Text,View,Picker} from 'react-native'
import {employeeUpdate} from '../actions'

class EmployeeForm extends Component{
  render(){
    return (
      <View>
        <CardSection>
          <Input label="Name" placeholder="Jane" value={this.props.name}
          onChangeText={text=>this.props.employeeUpdate({prop:'name',value:text})}
          />
        </CardSection>
          
        <CardSection>
          <Input label="Phone" placeholder="555-555-555"
          value={this.props.phone}
          onChangeText={text => this.props.employeeUpdate({prop:'phone',value:text})}
          />
        </CardSection>


        <CardSection style={{paddingBottom:20,flexDirection:'column'
      }}>
          <Text style={styles.textStyle}>Select day for shift</Text>
          <Picker
            //  style={{flex:1}}
            selectedValue={this.props.shift}
            onValueChange={day=>this.props.employeeUpdate({prop:'shift',value:day})}
          >
            <Picker.item label="Monday" value="Monday"/>
            <Picker.item label="Tuesday" value="Tuesday"/>
            <Picker.item label="Wednesday" value="Wednesday"/>
            <Picker.item label="Thursday" value="Thursday"/>
            <Picker.item label="Friday" value="Friday"/>
            <Picker.item label="Saturday" value="Saturday"/>
          </Picker>
        </CardSection>
        </View>
      )

  }
}
const styles={
  textStyle:{
    fontSize:20,
    paddingBottom:10
  }
}

const mapStateToProps=state=>{
  const{name,phone,shift}=state.employeeForm;
  return {name,phone,shift};
}

export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm)