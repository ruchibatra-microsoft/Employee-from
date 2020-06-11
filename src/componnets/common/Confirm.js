import React,{Component, Children} from'react'
import {Text,View, Modal} from 'react-native'
import {CardSection} from './CardSection'
import {Button} from './Button'

const Confirm = ({children,visible,onAccept,onDecline})=>{
  
  const {cardSctionStyle,textStyle,containerStyle}=styles
  return (
    <Modal
      animationType="slide"
      onRequestClose={()=>{}}
      transparent
      visible={visible}
    >
      <View style={containerStyle}>
        <CardSection style={cardSctionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button title="Yes" onPress={onAccept}/>
          <Button title="No" onPress={onDecline}/>
        </CardSection>
      </View>
    </Modal>
  )
}

const styles={
  cardSctionStyle:{
    justifyContent:'center'
  },
  textStyle:{
    flex:1,
    fontSize:18,
    textAlign:'center',
    lineHeight:40

  },
  containerStyle:{

    banckgroundColor:'rgb(0,0,0,0.75)',
    position:'relative',
    flex:1,
    justifyContent:'center'


  }
}

export {Confirm}