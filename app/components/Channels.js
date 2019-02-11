import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableWithoutFeedback } from 'react-native'

export default class Channels extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={{flex:1, padding: 10}}>
            <FlatList
                data={
                [
                    { 
                        key: 'First Box', 
                        tvURI: '',
                        uri: 'https://pbs.twimg.com/profile_images/979612604489523200/iNsFi5nX.jpg'
                    },
                    {
                        key: 'Second Box', 
                        tvURI: '',
                        uri: 'https://www.dodear.info/wp-content/uploads/2018/02/ptv.jpg'
                    }, 
                    {
                        key: 'Third Box', 
                        tvURI: '',
                        uri: 'http://blazeminds.com/blog/wp-content/uploads/2015/05/Geo-Super-Live-300x166.jpg'
                    }, 
                    {
                        key: 'Forth Box', 
                        tvURI: '',
                        uri: 'http://live.arynews.tv/pk/LIVE.jpg'
                    },
                    {
                        key: 'GNN', 
                        tvURI: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LOjbGkKU7Ng?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        uri: 'https://www.dodear.info/wp-content/uploads/2018/02/ptv.jpg'
                    },
                    {
                        key: 'Sixth Box', 
                        tvURI: '',
                        uri: 'https://www.dodear.info/wp-content/uploads/2018/02/ptv.jpg'},
                ]
                }
                renderItem={({item}) => (
                    <View style={{flex:1, padding: 5, marginBottom: 10}}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Channel', {
                            itemId: item.key,
                            itemURL: item.tvURI
                        })}>
                            <View style={{flex:1, padding:10, height: 200, marginBottom:10, borderRadius: 10, backgroundColor: '#ecc'}}>
                            {/* if(item.uri) return <Image source={item.uri} /> */}
                                <Image
                                source={{
                                    // uri: 'https://facebook.github.io/react/logo-og.png',
                                    uri: item.uri,
                                    method: 'POST',
                                    headers: {
                                    Pragma: 'no-cache',
                                    },
                                    body: 'Your Body goes here',
                                }}
                                style={{width: '100%', height: '100%'}}
                                />
                                <Text>Hello World....</Text>
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
