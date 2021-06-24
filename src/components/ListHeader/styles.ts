import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    title:{
        color: theme.colors.heading,
        fontSize: 18,
        fontFamily: theme.fonts.title700
    },
    total:{
        color: theme.colors.highlight,
        fontSize: 13,
        fontFamily: theme.fonts.text400
    }
})