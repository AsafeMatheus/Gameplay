import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    content:{
        flex: 1,
        justifyContent: 'center'
    },
    title:{
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading
    },
    type:{
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight
    }
})