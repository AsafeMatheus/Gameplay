import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#E51C44',
        width: 274,
        height: 56,
        alignItems: 'center',
        borderRadius: 8
    },
    icon:{
        alignItems: 'center',
        borderRightColor: theme.colors.line,
        borderRightWidth: 1,
        width: 56,
        height: 56,
        justifyContent: 'center'
    },
    title:{
        flex: 1,
        textAlign: 'center',
        fontSize: 15,
        color: theme.colors.heading
    }
})