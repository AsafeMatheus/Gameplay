import React from "react"
import { Image } from 'react-native'
import { styles } from "./styles"

export function GuildIcon(){
    const url = 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-2-1.png'

    return(
        <Image
            source={{ uri: url }}
            style={styles.image}
            resizeMode='cover'
        />
    )
}