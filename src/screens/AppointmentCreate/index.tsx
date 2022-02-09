import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { BackGround } from '../../components/Background'
import { SmallInput } from '../../components/SmallInput'
import { ModalView } from '../../components/ModalView'
import { GuildIcon } from '../../components/GuildIcon'
import { TextArea } from '../../components/TextArea'
import { GuildProps } from '../../components/Guild'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Guilds } from '../../components/Guilds'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export function AppointmentCreate(){
    const [openModalGuilds, setOpenModalGuilds] = useState(false)
    const [category, setCategory] = useState('')
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

    function handleGuildSelect(guildSelected: GuildProps){
        setOpenModalGuilds(false)
        setGuild(guildSelected)
    }

    function handleCloseGuilds(){
        setOpenModalGuilds(false)
    }

    return(
        <BackGround>
            <Header
                title='Agendar partida'
            />
            
            <ScrollView>
                <Text style={
                    [styles.label,
                    {marginLeft: 24, marginTop: 36, marginBottom: 18}]}
                >
                    Categoria
                </Text>
                <CategorySelect
                    hasCheckBox
                    categorySelected={category}
                    setCategory={setCategory}
                />
                <View style={styles.form}>
                    <RectButton onPress={() => setOpenModalGuilds(true)}>
                        <View style={styles.select}>
                            {
                                guild.icon ? <GuildIcon /> : <View style={styles.image} />
                            }
            
                            <View style={styles.selectBody}>
                                <Text style={styles.label}>
                                    {guild.name ? guild.name : 'Selecione um servidor'}
                                </Text>
                            </View>

                            <Feather
                                name='chevron-right'
                                color={theme.colors.heading}
                                size={18}
                            />
                        </View>
                    </RectButton>
            
                    <View style={styles.field}>
                        <View>
                            <Text style={styles.label}>Dia e mês</Text>
                            <View style={styles.column}>
                                <SmallInput
                                    keyboardType='numeric'
                                    maxLength={2}
                                />
                                <Text style={styles.divider}>/</Text>
                                <SmallInput
                                    keyboardType='numeric'
                                    maxLength={2}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.label}>Horário</Text>
                            <View style={styles.column}>
                                <SmallInput
                                    keyboardType='numeric'
                                    maxLength={2}
                                />
                                <Text style={styles.divider}>:</Text>
                                <SmallInput
                                    keyboardType='numeric'
                                    maxLength={2}
                                />
                            </View>
                        </View>
                    </View>
            
                    <ListHeader
                        title='Descrição'
                        subTitle='Max 100 caracteres'
                    />

                    <TextArea
                        multiline={true}
                        maxLength={100}
                        numberOfLines={5}
                        autoCorrect={false}
                    />

                    <View style={styles.footer}>
                        <Button
                            title='Agendar'
                        />
                    </View>
                </View>
            </ScrollView>
            
            <ModalView visible={openModalGuilds} closeModal={handleCloseGuilds}>
                <Guilds
                    handleGuildSelected={handleGuildSelect}
                />
            </ModalView>
        </BackGround>
    )
}