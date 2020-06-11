import React, {Component} from 'react'
import {View,Text} from 'react-native'
import {Card,CardSection,Input,Button,Header,Spinner} from './common'
import {emailChanged, passwordChanged,loginUser} from '../actions'
import {connect} from 'react-redux'


class LoginForm extends Component{
  onEmailChanged(text){
    this.props.emailChanged(text);
  }
  onPasswordChanged(text){
    this.props.passwordChanged(text);
  }
  onButtonPress(){
    const {email,password}=this.props

    this.props.loginUser({email,password});
  }

  renderError(){
    if(this.props.error){
      return <View>
        <Text style={styles.errorStyle}>
          {this.props.error}
        </Text>
      </View>
    }
  }
  renderButton(){
    if(this.props.loading)
      return (<Spinner/>)
    return (<Button title="Log in" onPress={this.onButtonPress.bind(this)}/>)
  }
  render(){
    return (

      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.props.email}
            placeholder="user@gmail.com"
            onChangeText={this.onEmailChanged.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            value={this.props.password}
            placeholder="password"
            onChangeText={this.onPasswordChanged.bind(this)}
          />
        </CardSection>
        {this.renderError()}
        <CardSection> 
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}
const mapStateToProps=(state)=>{
  return {
    email: state.auth.email,
    password: state.auth.password,
    error:state.auth.error,
    loading: state.auth.loading
  }

}
const styles={
  errorStyle:{
    fontSize:25,
    alignSelf:'center',
    color:'red'
  }
}


export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm);