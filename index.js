'use strict';

var keymakerToolbox = require('keymaker-toolbox');
var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;


var Keymaker = React.createClass({
  getInitialState: function() {
    return {
      key: '',
      password: '',
      salt: '',
      iterations: 100000,
      keylen: 32,
      lower: true,
      upper: true,
      number: true,
      special: true
    };
  },

  handlePress: function(e) {
    this.setState({
      key: keymakerToolbox.makeKey(this.state.password,
                                   this.state.salt,
                                   this.state.iterations,
                                   this.state.keylen,
                                   this.state.lower,
                                   this.state.upper,
                                   this.state.number,
                                   this.state.special)
    });
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => this.setState({password: text})}
          placeholder="Password"
          secureTextEntry={true}
          value={this.state.password}
        />
        <TextInput
          onChangeText={(text) => this.setState({salt: text})}
          placeholder="Salt"
          secureTextEntry={true}
          value={this.state.salt}
        />
        <TouchableHighlight onPress={this.handlePress}>
         <Text>
           Transform
         </Text>
        </TouchableHighlight>
        <Text style={styles.welcome}>
          {this.state.key}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = Keymaker;
