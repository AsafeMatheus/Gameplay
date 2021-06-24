import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { BackGround } from "../components/Background"

import { AuthRoutes } from "./auth.routes"

export function Routes(){
    return(
        <BackGround>
            <NavigationContainer>
                <AuthRoutes />
            </NavigationContainer>
        </BackGround>
    )
}