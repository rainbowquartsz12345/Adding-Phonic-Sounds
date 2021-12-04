import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Audio} from 'expo-av'

export default class PhonicSoundButton extends React.Component {
    playSound = async (soundpiece) => {
        var soundlink = 'https://s3-whitehatjrcontent.whjr.online/phones/'+soundpiece+'.mp3'
        await Audio.Sound.createAsync(
            {uri: soundlink} ,
            {shouldPlay: true}
        )
    }
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.chunkButton} onPress = {()=> this.playSound(this.props.soundchunk)   } >
                    <Text style={styles.displayText}> {this.props.wordchunk} </Text>
                </TouchableOpacity>

            </View>

        )

    }
}


const styles = StyleSheet.create({
    displayText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white'
    },
    chunkButton: {
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        margin: 5,
        backgroundColor: 'red'
    }
});
