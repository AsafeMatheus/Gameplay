import React from 'react'
import { View, ImageBackground, Text, FlatList, ScrollView } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'

import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'
import { BackGround } from '../../components/Background'
import { Header } from '../../components/Header'
import { ButtonIcon } from '../../components/ButtonIcon'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import banner from '../../assets/banner.png'

export function AppointmentDetails(){
    const members = [
        {
            id: '1',
            username: 'Asafe Matheus',
            avatar_url: 'https://github.com/AsafeMatheus.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Filipe Deschamps',
            avatar_url: 'https://github.com/filipedeschamps.png',
            status: 'offline'
        },
        {
            id: '3',
            username: 'Ika uchira',
            avatar_url: 'https://github.com/ikatyang.png',
            status: 'online'
        }
    ]

    return(
        <BackGround>
            <Header
                title='Detalhes'
                action={
                    <BorderlessButton>
                        <Fontisto
                            name='share'
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ScrollView>
                <ImageBackground source={banner} style={styles.banner}>
                    <View style={styles.bannerContent}>
                        <Text style={styles.title}>
                            Lendários
                        </Text>
                        <Text style={styles.description}>
                            É hoje que vamos chegar ao challenger sem perder uma partida da md10
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.content}>
                    <ListHeader
                        title='Jogadores'
                        subTitle='Total 3'
                    />
                
                    <FlatList
                        style={styles.memberList}
                        data={members}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => {
                            return(
                                <Member data={item} />
                            )
                        }}
                        ItemSeparatorComponent={() => <ListDivider />}
                    />
                
                    <View style={styles.footer}>
                        <ButtonIcon title='Entrar na partida' />
                    </View>
                </View>
            </ScrollView>
        </BackGround>
    )
}