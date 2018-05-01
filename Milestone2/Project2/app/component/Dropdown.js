import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './app/component/Main';
import TaskItem from './TaskItem';


export default class TaskItemApp extends React.Component {
  render() {
    return (
        <View style={styles.container}> 
      
        
        
        <TaskItem style={styles.date}
          //description="Draft 3 ideas for seminar presentation"
          //done={new Date()}
          //priority={4}
          deadline={new Date(2018,1,23,12)}
          tags={["#brainstorm", "#focus"]}
        />
            <Main/>
            
            <View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
    justifyContent: 'center',
  },
  date:{
    backgroundColor:'red',
    color:'red',
  textAlign:'center',
  }
});
