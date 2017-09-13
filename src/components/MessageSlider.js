import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default class MessageSlider extends React.Component {
  constructor(){
    super();
    this.state = {
      messageWidth: 0,
      messageBoo: true,
    };
  }
  Test(){
    var load;
    var unload;
    var self = this;
  if (this.state.messageBoo === true){
    load = setInterval(function(){
      if (self.state.messageWidth < 70){
      self.setState({messageWidth: self.state.messageWidth+10});
      }
      else if (self.state.messageWidth === 70){
        self.setState({messageWidth: 70});
        clearInterval(load);
      }
    }, 10);
  }
  else{
    unload = setInterval(function(){
      if (self.state.messageWidth > 0){
        self.setState({messageWidth: self.state.messageWidth-10});
      }
      else if (self.state.messageWidth === 0){
        self.setState({messageWidth: 0});
        clearInterval(unload);
      }
    }, 10);
  }
  this.setState({messageBoo: !this.state.messageBoo});
  }
  render() {
    let messageBoardStyle = {
        width: this.state.messageWidth+'%',
        backgroundColor: 'lightblue',
        height: '100%',
        zIndex: -1,
    }

    return (<View>
      <View style={styles.Home}>
        <Text style={styles.Message} onPress={this.Test.bind(this)}>Messages</Text>
        <View style={messageBoardStyle}>
        </View>
      </View>
      </View>
    );
  }
}

//Notice styles is outside of class Message slider, which is why you couldn't acces them with State

const styles = StyleSheet.create({
  Message: {
    top: 20,
    left: 10,
    width: '27%',
    textAlign: 'center',
    fontSize: 15,
    paddingVertical: 3,
    backgroundColor: 'white',
  },
  Home: {
    marginTop: 30,
    width: '100%',
    backgroundColor: 'grey',
    height: '100%',
  },
});
