import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var Icon = React.createClass({
	render:function(){
		return(
			<View >
			        <View style={styles.go}>

			        </View>
			  </View>
			);
	}
});

const styles = StyleSheet.create({
  go: {
    width: 15,
    height: 15,
    borderLeftWidth:  2,
    borderBottomWidth: 2,
    borderColor: "#fff",
    marginLeft: 10,
    transform: [{rotate:"45deg"}]  //将一个框旋转了45度
  }
 });

module.exports = Icon;