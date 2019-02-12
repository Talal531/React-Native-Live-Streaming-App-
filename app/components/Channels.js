import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'

export default class Channels extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            channels: []
        };
    }
    
    componentDidMount () {
        fetch('http://192.168.0.109:8000/api/channels')
        .then(response => response.json())
        .then(json => {
            setTimeout(() => {
                this.setState({
                    isLoading: false,
                    channels: JSON.stringify(json)
                })
            }, 3000);
        });
}

    render() {
        if(this.state.isLoading) return <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}><ActivityIndicator size="large" color="#2eca4f"  /></View>
        return (
            <View style={{flex:1, padding: 10}}>
                <FlatList
                    data={ JSON.parse(this.state.channels)
                    // [ 
                    //     {
                    //         key: 'GNN', 
                    //         tvURI: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LOjbGkKU7Ng?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    //         uri: 'https://www.dodear.info/wp-content/uploads/2018/02/ptv.jpg'
                    //     },
                    //  uri: 'https://www.dodear.info/wp-content/uploads/2018/02/ptv.jpg'},
                    // ]
                    }
                    renderItem={({item}) => (
                        <View style={{flex:1, padding: 5, marginBottom: 10}}>
                            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Channel', {
                                itemId: item.key,
                                itemURL: item.channel_URI
                            })}>
                                <View style={{flex:1, padding:10, height: 200, marginBottom:10, borderRadius: 10, backgroundColor: '#ecc'}}>
                                {/* if(item.uri) return <Image source={item.uri} /> */}
                                    <Image
                                    source={{
                                        // uri: 'https://facebook.github.io/react/logo-og.png',
                                        uri: item.channel_thumbnail,
                                        method: 'POST',
                                        headers: {
                                        Pragma: 'no-cache',
                                        },
                                        body: 'Your Body goes here',
                                    }}
                                    style={{width: '100%', height: '100%'}}
                                    />
                                    <Text>{item.key}
                                    {console.log(item.key)}
                                    </Text>
                                </View>  
                            </TouchableWithoutFeedback>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
