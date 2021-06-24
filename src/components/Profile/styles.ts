import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    user:{
        flexDirection: 'row'
    },
    greeting:{
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 5
    },
    userName:{
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading
    },
    message:{
        color: theme.colors.highlight,
        fontFamily: theme.fonts.text400,
        fontSize: 13
    }
})