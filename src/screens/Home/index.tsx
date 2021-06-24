import React, {useState} from "react"
import { View, FlatList } from "react-native"
import { styles } from "./styles"

import { Profile } from "../../components/Profile"
import { ButtonAdd } from "../../components/ButtonAdd"
import { CategorySelect } from "../../components/CategorySelect"
import { ListHeader } from "../../components/ListHeader"
import { Appointment } from "../../components/Appointment"
import { ListDivider } from "../../components/ListDivider"

export function Home(){
    const [category, setCategory] = useState('')

    const appointments = [{
        id: '1',
        guild:{
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        category:'1',
        date: '22/06 às 20:40',
        description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
        id: '2',
        guild:{
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        category:'1',
        date: '22/06 às 20:40',
        description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
    ]

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>

            <View style={styles.content}>
                <ListHeader
                    title='Partidas agendadas'
                    total={6}
                />

                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => {
                        return <Appointment data={item} />
                    }}
                    style={styles.matches}
                    ItemSeparatorComponent={() => <ListDivider />}
                />
            </View>
        </View>
    )
}