import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, Image, Text } from 'react-native'
import { styles } from './styles'
import discordImg from '../../assets/discord.png'

type Props = RectButtonProps & {
    title: string
}

export function ButtonIcon({ title, ...rest } : Props){
    return(
        <RectButton 
            style={styles.container} 
            {...rest}
        >
            <View style={styles.icon}>
                <Image source={discordImg} />
            </View>

            <Text style={styles.title}>{ title }</Text>
        </RectButton>
    )
}