import React from "react";
import {Text, View, StatusBar} from "react-native";


class Loading extends React.Component{
    constructor(props,context) {
        super(props,context);
    }
    render() {
        const styles = {
            container: {
                flex: 1,
                justifyContent: 'flex-end',
                paddingHorizontal: 30,
                paddingVertical: 100,
                backgroundColor: '#FDF6AA',
            },
            text: {
                color: '#2c2c2c',
                fontSize: 30,
            },
            yellowView: {
                flex:1,
                backgroundColor: 'yellow',
            },
            aquaView: {
                flex:2,
                backgroundColor: 'aqua'
            }
        };
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <Text style={styles.text}>Getting Weather</Text>
            </View>
        );
    }
}
export default Loading;