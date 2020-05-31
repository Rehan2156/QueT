import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import * as firebase from 'firebase'

export default class Shopkeeper extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Shopkeeper </Text>
                <Button
                    title = "Log Out"
                    onPress = {() => firebase.auth().signOut()} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})
