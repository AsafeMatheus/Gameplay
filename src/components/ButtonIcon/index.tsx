import React from 'react'
import {
    TouchableOpacity,
    View,
    Image,
    Text
} from 'react-native'
import { styles } from './styles'
import discordImg from '../../assets/discord.png'

type Props = {
    title: string
}

export function ButtonIcon({ title } : Props){
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <View style={styles.icon}>
                <Image source={discordImg} />
            </View>

            <Text style={styles.title}>{ title }</Text>
        </TouchableOpacity>
    )
}