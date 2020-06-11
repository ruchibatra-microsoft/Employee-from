import React ,{Component} from 'react'
import {CardSection,Card,Button} from './common'
import {connect} from 'react-redux'
import {employeeUpdate} from '../actions'
import {employeeCreate} from '../actions'
import EmployeeForm from './EmployeeForm'


class EmployeeCreate extends Component{

  onPressButton(){
    const {name,phone,shift}=this.props

    this.props.employeeCreate({name,phone,shift:shift || 'Monday'})
  }
  render(){
    return (
      
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button title="Create" onPress={this.onPressButton.bind(this)}/>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps=state=>{
  const{name,phone,shift}=state.employeeForm;
  return {name,phone,shift};
}




export default connect(mapStateToProps, {employeeUpdate,employeeCreate})(EmployeeCreate)