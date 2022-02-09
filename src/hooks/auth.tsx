import React, {
    createContext,
    useContext,
    useState,
    ReactNode
} from "react"
import * as AuthSession from 'expo-auth-session'
import {
    REDIRECT_URI,
    SCOPE,
    RESPONSE_TYPE,
    CLIENT_ID,
    CDN_IMAGE
} from '../configs'
import { api } from "../services/api"

type User = {
    id: string,
    userName: string,
    firstName: string,
    avatar: string,
    email: string,
    token: string
}

type AuthContextData = {
    user: User,
    SignIn: () => Promise<void>
}

type AuthProviderProps = {
    children: ReactNode
}

// --------------------- MAIN ---------------------------- //
export const AuthContext = createContext({} as AuthContextData)
// ------------------------------------------------------- //


function AuthProvider({children} : AuthProviderProps){
    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false)

    async function SignIn(){
        const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`

        try {
            setLoading(true)

            const response = await AuthSession.startAsync({ authUrl: authUrl })
            console.log(response)
            console.log('working')

        } catch (error) {
            console.log(error)
            throw new Error('Não foi possível')
        }
    }

    return(
        <AuthContext.Provider value={{
            user,
            SignIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export {
    AuthProvider,
    useAuth
}