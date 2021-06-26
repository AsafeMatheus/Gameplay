import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 95,
        backgroundColor: theme.colors.secondary40,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        fontSize: 13,
        borderRadius: 8,
        marginTop: 18,
        padding: 10
    }
})