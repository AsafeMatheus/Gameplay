import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"
import { getStatusBarHeight } from "react-native-iphone-x-helper"

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 104,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
        paddingHorizontal: 24,

    },
    title:{
        flex: 1,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 20,
        textAlign: 'center'
    }
})