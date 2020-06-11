import React from 'react'
import {Scene,Router,Stack} from 'react-native-router-flux'
import LoginForm from './componnets/LoginForm'
import EmployeeList from './componnets/EmployeeList'
import EmployeeCreate from './componnets/EmployeeCreate'
import {Actions} from 'react-native-router-flux'
import EmployeeEdit from './componnets/EmployeeEdit'

const RouterComponent =()=>{
  return (
      <Router>
       <Stack key="root" hideNavBar> 
        <Stack key="auth">
        <Scene key="login" component={LoginForm} title ="Login"/>
        </Stack>
        <Stack key="main">
         <Scene 
            rightTitle="Add"
            onRight={()=>{Actions.employeeCreate()}}
            key="employeeList" 
            component={EmployeeList}
            title ="Employee List"
            initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Employee Create"/>
          <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee"/>
         </Stack>
        </Stack> 
      </Router>
    

  )
}

export default RouterComponent;