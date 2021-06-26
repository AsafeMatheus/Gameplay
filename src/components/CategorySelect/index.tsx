import React from 'react'
import { View, ScrollView } from 'react-native'
import { styles } from './styles'

import { Category } from '../Category'
import { categories } from '../../utils/categories'

type Props = {
    categorySelected: string,
    setCategory: (categoryId: string) => void,
    hasCheckBox?: boolean
}

export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false } : Props){
    return(
        <ScrollView 
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
        >
            {
                categories.map(category => {
                    return(
                        <Category
                            key={category.id}
                            title={category.title}
                            icon={category.icon}
                            checked={category.id === categorySelected}
                            onPress={() => setCategory(category.id)}
                            hasCheckBox={hasCheckBox}
                        />
                    )
                })
            }
        </ScrollView>
    )
}