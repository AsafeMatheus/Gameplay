import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

type Props = {
    title: string,
    total: number
}

export function ListHeader({title, total} : Props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.total}>Total {total}</Text>
        </View>
    )
}