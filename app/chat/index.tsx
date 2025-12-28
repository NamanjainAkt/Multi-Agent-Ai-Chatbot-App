import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'

export default function Chat() {
    const navigation = useNavigation()
    const {agentName,initialText,agentPrompt,agentId} = useLocalSearchParams()
    useEffect(() => {
        navigation.setOptions({
            headerShown:true,
            headerTitle:agentName
        })
    }, [])
    return (
        <View>
            <Text>Chat</Text>
        </View>
    )
}