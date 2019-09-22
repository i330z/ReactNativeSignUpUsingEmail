import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAgzVKoBMPZt2qQkfVSqgDUy4z8uYUzDqE",
  authDomain: "reactnativeemail-50ca3.firebaseapp.com",
  databaseURL: "https://reactnativeemail-50ca3.firebaseio.com",
  projectId: "reactnativeemail-50ca3",
  storageBucket: "",
  messagingSenderId: "300717876452",
  appId: "1:300717876452:web:e75f4867cc53145e0f78f1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'


export default class App extends React.Component{

  constructor(){
    super()

    this.state = ({
      email: '',
      Password: ''
    })
  }

  signUpUser = (email,password) => {
    try{
      if(this.state.password.length < 6){
        alert("Please Enter atleast 6 characters")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email,password)

    }
    catch(error){
      console.log(error.toString())
    }
  }
  loginUser = (email,password) => {
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        console.log(user)
      })
    }
    catch(error){
      console.log(error.toString())
    }
  }

  render(){
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input onChangeText={(email) => this.setState({email})} autoCapitalize="none" autoCorrect={false} />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input onChangeText={(password) => this.setState({password})} autoCapitalize="none" autoCorrect={false} secureTextEntry={true} />
          </Item>

          <Button onPress={() => this.loginUser(this.state.email,this.state.password)} full rounded success style={{ marginTop:20}}>
            <Text style={{color:'white'}}>Login</Text>
          </Button>

          <Button onPress={() => this.signUpUser(this.state.email,this.state.password)} full rounded primary style={{ marginTop:20}}>
            <Text style={{color:'white'}}>SignUp</Text>
          </Button>

        </Form>
      </Container>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding:10,
  },
});
