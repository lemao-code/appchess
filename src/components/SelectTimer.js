import React, {useState, useContext} from 'react'
import { Context } from '../Context/StateContext'

import Timer from './Timer'
import {ContainerTimer, SelectTimerContainer,ButtonStartGame} from './style/style'
import { Text, View} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

const timers = [1,3,5,10,15]

function SelectTimer ({isVisible, navigation}) {
    const { selectedTimer } = useContext(Context)
    return (
        <ContainerTimer isVisible={isVisible}>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    {timers.map((element, i) => {
                        return (
                            <SelectTimerContainer onPress={ () => {
                                selectedTimer(element)
                            }} 
                                key={i}>
                                    <Text style={{fontFamily: "FontCustom",fontSize: 18, color: "white"}}>
                                        {element}Min
                                    </Text>
                                    
                            </SelectTimerContainer>
                        )
                    })}
            </View>
            <ButtonStartGame onPress={() => {
                navigation.navigate('Timer')}}>
                <LinearGradient style={{width: 200, height: 50, borderRadius: 20, display: "flex", justifyContent: "center", alignItems: "center",
                borderColor: "black",borderWidth: 1}} colors={['#f00808', '#0d0c0c']}>
                    
                        <Text style={{fontFamily: "FontCustom", color: "white",textAlign: "center"}}>GO TO PLAY CHESS!</Text>
                    </LinearGradient>
            </ButtonStartGame>
        </ContainerTimer>

    )
}


export default SelectTimer