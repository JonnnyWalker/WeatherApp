import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Forecast from './Forecast'

export default class WeatherApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            forecast:{
               main: '_',
               description: '_',
               temp: 0
            }
        };
    }

    componentWillMount(){
        var self = this;
        console.log("Hey!");
        fetch("http://api.openweathermap.org/data/2.5/weather?q=90110,th&units=metric&APPID=5a5d6e7e4f41753a7cc7b0566423fea6")
        .then(response => response.json())
        .then(responseJSON => {
            self.setState({
                forecast: {
                    main: responseJSON.weather[0].main,
                    description: responseJSON.weather[0].description,
                    temp: responseJSON.main.temp
                }
            })
        })
        .catch(error => {console.warn(error)});
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                HatYai Weather
                </Text>
                <Forecast main={this.state.forecast.main} 
                          description={this.state.forecast.description}
                          temp={this.state.forecast.temp}/>
            </View>
        );
    }
}

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
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  },
});
