import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    content:{
        flex: 1,
        justifyContent: 'center'
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    title:{
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18
    },
    category:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13
    },
    plyerInfo:{
        flexDirection: 'row',
        
    },
    date:{
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight,
        fontSize: 13
    },
    player:{

    },
    info:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    dateInfo:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})