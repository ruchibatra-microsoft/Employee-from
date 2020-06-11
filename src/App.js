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
      apiKey: "AIzaSyASiTBN1ZaEuxmztC8-cLKY032A9diM_Uk",
      authDomain: "manager-7cd50.firebaseapp.com",
      databaseURL: "https://manager-7cd50.firebaseio.com",
      projectId: "manager-7cd50",
      storageBucket: "manager-7cd50.appspot.com",
      messagingSenderId: "643316801057",
      appId: "1:643316801057:web:9c1980905e60d0bb79cd60",
      measurementId: "G-95NL2H3EQZ"
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