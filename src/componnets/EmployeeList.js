import _ from 'lodash'
import React, {Component} from 'react'
import {View,Text,FlatList} from 'react-native'
import {connect} from 'react-redux';
import {employeeFetch} from '../actions'
import ListItem from './ListItem'


class EmployeeList extends Component{
 

  UNSAFE_componentWillMount(){
    this.props.employeeFetch();
  }

  render(){
    return (
      <View>
        <FlatList
          data={this.props.employees}
          keyExtractor={(employee)=>employee.uid}
          renderItem={({item})=>{
            return (
              <ListItem employee={item}/>
            )
          }}
        />
      </View>
    )
  }
}


const mapStateToProps=state=>{
  const employees = _.map(state.employees,(val,uid)=>{
    return {...val,uid}
  })
  return {employees};
}


export default connect(mapStateToProps,{employeeFetch})( EmployeeList)