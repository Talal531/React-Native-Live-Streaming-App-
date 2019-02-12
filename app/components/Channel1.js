import React, { Component } from 'react'
import { Text, StyleSheet, View, WebView } from 'react-native'

export default class Channel1 extends Component {
    static navigationOptions = {
        headerTitle: 'TV Channel'
    }
    
    render() {
        const { navigation } = this.props;
        const ItemId = navigation.getParam('itemId', 'NO-ID');
        const ItemURL = navigation.getParam('itemURL', 'NO-URL');
        return (
            <View style={styles.container}>
                <Text> {`Channel ${JSON.stringify(ItemId)}`}</Text>
                <Text> {`${JSON.stringify(ItemURL)}`}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})
