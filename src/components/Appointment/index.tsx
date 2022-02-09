import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import { styles } from './styles'

import PlayerSvg from '../../assets/player.svg'
import CalenderSvg from '../../assets/calendar.svg'

import { GuildProps } from '../Guild'
import { GuildIcon } from '../GuildIcon'
import { categories } from '../../utils/categories'
import { theme } from '../../global/styles/theme'

export type AppointmentProps = {
    id: string,
    guild: GuildProps,
    category: string,
    date: string,
    description: string 
}

type Props = RectButtonProps & {
    data: AppointmentProps
}

export function Appointment({ data, ...rest } : Props){
    const [category] = categories.filter(item => item.id === data.guild.id)
    const {primary, on} = theme.colors
    const owner = data.guild.owner

    return(
        <RectButton {...rest}>
            <View style={styles.container}>
                <GuildIcon />

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{data.guild.name}</Text>

                        <Text style={styles.category}>{category.title}</Text>
                    </View>

                    <View style={styles.info}>
                        <View style={styles.dateInfo}>
                            <CalenderSvg fill={primary} />
                            <Text style={styles.date}>{data.date}</Text>
                        </View>

                        <View style={styles.plyerInfo}>
                            <PlayerSvg fill={owner ? primary : on} />
                            <Text style={[styles.player, {color: owner ? primary : on}]}>
                                {owner ? 'Anfitrião' : 'Visitante'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    )
}