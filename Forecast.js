import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Forecast extends Component {
    
    render(){
        return(
            <View>
                <Text>{this.props.main}</Text>
                <Text>Current conditions: {this.props.description}</Text>
                <Text>{this.props.temp} °C</Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    
});
