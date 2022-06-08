import React, { useState } from "react"
import {View,Text,StyleSheet,FlatList,Alert} from "react-native"
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
import uuid from 'uuid-random'


const App = () => {

  const [items, setItems] =  useState([
    {id:uuid(), text: 'HTML'},
    {id:uuid(), text: 'CSS'},
    {id:uuid(), text: 'JAVA'},
    {id:uuid(), text: 'JENKINS'}
  ])

  const deleteItem = (id) =>{
    setItems(prevItems => {
      return prevItems.filter(items => items.id != id)
    })
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error','Please Input Text');
    }else{
      setItems(prevItems => {
        return [{id:uuid(),text},...prevItems];
      })
    }
  
  }

return (
    <View style={styles.container}> 
     <Header title='My Book List'></Header>
     <AddItem addItem={addItem}/>
     <FlatList data={items} 
     renderItem= {({item}) => (<ListItem item={item}
      deleteItem={deleteItem}/>)} />
    </View>
  )
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop:0
}
});




export default App;
