import React from 'react'
import { useNavigation } from '@react-navigation/core'
import {
    Text,
    Image,
    View
} from 'react-native'
import { styles } from './styles'
import illustrationImg from '../../assets/illustration.png'

import { ButtonIcon } from '../../components/ButtonIcon'
import { BackGround } from '../../components/Background'

export function SignIn(){
    const navigation = useNavigation()

    function handleHome(){
        navigation.navigate('Home')
    }

    return(
        <BackGround>
            <View style={styles.container}>
                <Image source={illustrationImg} style={styles.image} resizeMode='stretch' />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas
                    </Text>
                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Text>
                </View>

                <View style={styles.button}>
                    <ButtonIcon
                        title='Entrar com Discord'
                        activeOpacity={0.7}
                        onPress={handleHome}
                    />
                </View>
            </View>
        </BackGround>
    )
}