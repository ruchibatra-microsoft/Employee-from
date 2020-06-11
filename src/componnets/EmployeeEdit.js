import React ,{Component} from 'react'
import {Card,CardSection,Button,Confirm} from './common'
import {connect} from 'react-redux'
import EmployeeForm from './EmployeeForm'
import {employeeUpdate,employeeSave,employeeDelete} from '../actions'
import _ from 'lodash'
import Communications from 'react-native-communications'



class EmployeeEdit extends Component{
  state={showModal:false};
  UNSAFE_componentWillMount(){
    _.each(this.props.employee,(value,prop)=>{
      this.props.employeeUpdate({prop,value});
    })
  }

  onButtonPress(){
    const {name,phone,shift}=this.props;
    this.props.employeeSave({name,phone,shift,uid:this.props.employee.uid})

    
  }

  onTextPress(){
    const{phone,shift}=this.props;
    Communications.text(phone,`Your Upcoming shift is on ${shift}`)

  }
  onAccept(){
    
    this.props.employeeDelete({uid:this.props.employee.uid})
  }
  onDecline(){
    this.setState({showModal:false})
  }
  
  render(){
    return (
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button title="Save changes" onPress={this.onButtonPress.bind(this)}/>
        </CardSection>

        <CardSection>
          <Button title="Text Schedule" onPress={this.onTextPress.bind(this)}/>
        </CardSection>

        <CardSection>
          <Button title="Fire Employee" onPress={()=>this.setState({showModal:!this.state.showModal})}/>
        </CardSection>

       
         <Confirm 
         visible={this.state.showModal}
         onAccept={this.onAccept.bind(this)}
         onDecline={this.onDecline.bind(this)}
         >
          Are you sure you want to fire?
          </Confirm>
  
      </Card>
    )
  }
}

const mapStateToProps=state=>{
  const{name,phone,shift}=state.employeeForm;
  return {name,phone,shift};
}

export default connect(mapStateToProps,{employeeUpdate,employeeSave,employeeDelete})(EmployeeEdit)