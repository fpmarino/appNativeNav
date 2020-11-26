import { StatusBar } from 'expo-status-bar';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, View } from 'react-native';
const axios = require("axios");

  
export default class App extends Component {
  state = {

    response: [],
    estado: null,
  };

  handlerText(t)
  {
    var text = t;
    this.setState({value : text});
  }  

  handlerButton = () => 
  {
    var buscar = this.state.value; 
    if(buscar==null)
    { 
    axios.get( 'https://api.openbrewerydb.org/breweries')
        .then( dato => {
        console.log(dato.data); 
          
        
        this.setState({
          response: dato.data,
          estado: true
        }) 
        console.log(this.state)
    });
    } 
  }




  render(){
    
    if(this.state.estado != true)
    {
   
      return (
        <View style={styles.container}>

        <Text style={styles.text}>Buscar cerveceria</Text>
        <TextInput style={style.input} placeholder="Elegir cerveceria" onChangeText = {this.handlerText.bind(this)}></TextInput> 
        <TouchableOpacity
        style={styles.button}
        onPress={this.handlerButton.bind(this)}>
        </TouchableOpacity>
          <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>Nombre: {this.state.response.name}</Text>          
          <Text style={styles.text}>Tipo de cerveceria: {this.state.response.brewery_type}</Text>
          <Text style={styles.text}>Direccion: {this.state.response.street}</Text>
          <Text style={styles.text}>Ciudad: {this.state.response.city}</Text>          
          <Text style={styles.text}>Pais: {this.state.response.country}</Text>
          <Text style={styles.text}>Telefono: {this.state.response.phone}</Text>
          <Text style={styles.text}>Pagina Web: {this.state.response.website_url}</Text>
          </ScrollView>
          <StatusBar style="auto" />
        </View>             
      );   }

}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#00a3b5",
    padding: 8,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#7f8282",
    padding: 8,
    borderRadius: 20,
  },
  input: { 
    height: 35,
    width: 200,
    margin: 15,
    padding: 8,
    borderColor: '#00a3b5',
    backgroundColor: 'white', 
    borderWidth: 2, 
  }, 
  scrollView: {
    backgroundColor: 'white',
    padding: 15,
    marginTop: 20
  },
});
