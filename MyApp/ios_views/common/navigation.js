/**
 * 实现功能：封装导航器初始化设置
 * 包含组件：Navigator
 * 外部传入：
 component  需要展示的页面组件
 route对象  必须添加component属性：如果需要传值可以添加passProps属性
 */


 import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

var Icon = require("./left_icon");
// 获取obj对象，包括：backName barTitle
var Navigation = React.createClass({
	render:function(){
		// 创建route对象，约定格式
            	var rootRoute = {
            		component: this.props.component,// this.props.component是从外部传入的
            		passProps: {

            		}
            	};
		return(
			<Navigator 
			initialRoute={rootRoute}
			configureScene={() => {return Navigator.SceneConfigs.PushFromRight}} 
			renderScene={(route,navigator) => {
				var Component = route.component;
				return (
					<View style = {{flex:1}}>
						<Component navigator={navigator}
						route={route}
						{...route.passProps}/>
					</View>
					);
			}/>
			
		);
	}
});

const styles = StyleSheet.create({
  header: {
    height: 44,
    backgroundColor: "#3497FF",
    flexDirection: "row",
    justifyContent: "center" , //将一个框旋转了45度
    alignItems: "center"
  }
});


module.exports = Navigation;