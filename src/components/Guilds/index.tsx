import React from 'react'
import { View, FlatList } from 'react-native'
import { Guild, GuildProps } from '../Guild'

import { ListDivider } from '../ListDivider'

import { styles } from './styles'

type Props = {
    handleGuildSelected: (guild : GuildProps) => void
}

export function Guilds({handleGuildSelected} : Props){
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'index',
            owner: true
        },
        {
            id: '2',
            name: 'Lendários',
            icon: 'index',
            owner: false
        },
        {
            id: '3',
            name: 'Lendários',
            icon: 'index',
            owner: false
        },
        {
            id: '4',
            name: 'Lendários',
            icon: 'index',
            owner: false
        },
        {
            id: '5',
            name: 'Lendários',
            icon: 'index',
            owner: false
        },
        {
            id: '6',
            name: 'Lendários',
            icon: 'index',
            owner: false
        },
        {
            id: '7',
            name: 'Lendários',
            icon: 'index',
            owner: false
        },
    ]

    return(
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return(
                        <Guild
                            onPress={() => handleGuildSelected(item)}
                            data={item}
                        />
                    )
                }}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider />}
                ListHeaderComponent={() => <ListDivider />}
                contentContainerStyle={{paddingBottom: 69, paddingTop: 103}}
            />
        </View>
    )
}