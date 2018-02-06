// navigator:点击返回按钮上一级页面
// initObj(backName title) 返回按钮的名称、标题

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

var Icon = require("./left_icon");
// 获取obj对象，包括：backName barTitle
var Header = React.createClass({
	render:function(){
            var headerContent = this.props.initObj;
		return(
			<View  style={styles.header}>
			        <TouchableOpacity style={styles.left_btn} onPress={this._pop}>
                              <Icon/>
                              <Text  style={styles.btn_text}>{headerContent.backName}</Text>
			        </TouchableOpacity>
                          <View style={styles.title_container}>
                              <Text style={styles.title} numberOfLines={1}>{headerContent.barTitle}</Text>
                          </View>
			  </View>
			);
	},
  //  返回按钮事件处理方法
  _pop: function(){
    this.props.navigator.pop();
  }
});

const styles = StyleSheet.create({
  header: {
    height: 44,
    backgroundColor: "#3497FF",
    flexDirection: "row",
    justifyContent: "center" , //将一个框旋转了45度
    alignItems: "center"
  },
  left_btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  btn_text: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold"
  },
  title_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    line-height: 18,
    width: 200
  }
 });


module.exports = Header;