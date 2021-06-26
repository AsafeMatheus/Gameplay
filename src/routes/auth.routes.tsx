import React from "react"
import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from "../screens/SignIn"
import { Home } from "../screens/Home"
import { AppointmentDetails } from "../screens/AppointmentDetails"
import { AppointmentCreate } from "../screens/AppointmentCreate"

import { theme } from "../global/styles/theme"

const {Navigator, Screen} = createStackNavigator()

export function AuthRoutes(){
    return(
        <Navigator
            headerMode='none'
            screenOptions={{
                cardStyle:{
                    backgroundColor: theme.colors.secondary100
                }
            }}
            initialRouteName='SignIn'
        >
            <Screen
                name='SignIn'
                component={ SignIn }
            />
            <Screen
                name='Home'
                component={ Home }
            />
            <Screen
                name='AppointmentDetails'
                component={ AppointmentDetails }
            />
            <Screen
                name='AppointmentCreate'
                component={ AppointmentCreate }
            />
        </Navigator>
    )
}