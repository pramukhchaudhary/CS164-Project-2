import React, { Component } from 'react';
import { Text, View, TouchableHighlight, ListView, StyleSheet, TextInput, ScrollView, TouchableOpacity, CheckBox,} from 'react-native';

export default class Note extends React.Component  {
    constructor(){
        super();
        this.state ={
            check: false,
            priority: 3
        }}
        CheckBoxTest(){
            this.setState({
                check: !this.state.check 
                //write a method to alert when box is uncheck
            })
            alert("You are about to check the task as done!")
        
    }

    changePriority(){
        this.setState({
            priority: this.state.priority + 1
        })
    }
    
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
       <CheckBox style={styles.check} value={this.state.check} onChange={()=> this.CheckBoxTest()} />
      <Text style={styles.noteText}> {this.props.val.date} </Text>
      <Text style={styles.noteText}>{this.props.val.note}</Text>
      <Text style={styles.noteText}>{this.props.val.desc}</Text>
      <TouchableHighlight onPress={() => this.changePriority()}>
          <Text style={styles.noteText}>Priority {this.state.priority}</Text>
     </TouchableHighlight>

      <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
     
<Text style={styles.noteDeleteText}>Delete</Text>
</TouchableOpacity>

      
      </View>
    );
  }
}
const styles = StyleSheet.create({
    note:{
        position:'relative',
        padding:20,
        paddingRight:100,
        borderBottomWidth:2,
        borderBottomColor:'#ededed',
    },

    noteDelete:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2980b9',
        padding:10,
        top:10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText:{
        color:'white',
    },
 
    check:{
     borderBottomColor: 10,
     borderBottomColor:'red',



     // resize the checkbox
    },
    
  

});
