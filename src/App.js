import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import firebase from 'firebase'
import LoginForm from './componnets/LoginForm'
import RouterComponent from './RouterComponent'

class App extends Component{
  UNSAFE_componentWillMount(){
    const config={
     //your firebase authentication and keys
    }
    firebase.initializeApp(config);
  }
  render(){
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
      <RouterComponent/>
      </Provider>
    )
  }
}

export default App;
