/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBar
} from 'react-native';

// 隐藏状态栏
// StatusBar.setHidden(true);
// TabBarIOS管理2个模块，图书和电影

var App = React.createClass({

  getInitialState: function() {
    return {
      selectedTab:"图书",
      notifCount: 0,
      presses: 0,
    };
  },
  render:function(){
    return (
 <TabBarIOS>
        <TabBarIOS.Item
        title="图书" 
        selected={this.state.selectedTab==="图书"} 
        onPress={() => {
          this.setState({
            selectedTab:"图书"
          })
        }}
        >
   
        <View style={styles.container}>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text>Hello world!</Text>
      </View>

      </TabBarIOS.Item>
      <TabBarIOS.Item
        title="电影" 
        selected={this.state.selectedTab==="电影"}
        onPress={() => {
          this.setState({
            selectedTab:"电影"
          })
        }}
        >
        <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
      </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

// export default class App extends Component<{}> {
//   constructor(props) {
//     super(props);
//     this.state ={
//       selectedTab:"图书"
//     };
//   }
//   render() {
//     return (
//         <TabBarIOS>
//         <TabBarIOS.Item
//         title="图书" 
//         selected={this.state.selectedTab==="图书"} 
//         onPress={() => {
//           this.setState({
//             selectedTab:"图书"
//           })
//         }}
//         >
   
//         <View style={styles.container}>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text>Hello world!</Text>
//       </View>

//       </TabBarIOS.Item>
//       <TabBarIOS.Item
//         title="电影" 
//         selected={this.state.selectedTab==="电影"}
//         onPress={() => {
//           this.setState({
//             selectedTab:"电影"
//           })
//         }}
//         >
//         <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//       </View>
//       </TabBarIOS.Item>
//       </TabBarIOS>
//     );
//   }
// }

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//         <Text>Hello world!</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


module.exports = App;
// AppRegistry.registerComponent('MyApp', () => App);//不需要在此处再加上它，因为已经在index.js中指定