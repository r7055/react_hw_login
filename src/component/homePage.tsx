import { createContext, Dispatch, useReducer, useState } from "react"
import userType, { action, UserType } from "../types/userType"
import Login from "./login"
import Avatar from "./Avatar"



export const ThemeUser = createContext<{ user: UserType, userDispatch: Dispatch<action> }>(
    {
        user: {},
        userDispatch: () => null
    })

export const IsLogin = createContext<[boolean, Dispatch<React.SetStateAction<boolean>>]>([false, () => null])

const Home = () => {
    const [user, userDispatch] = useReducer(userType, {} as UserType)
    const [isLogin, setIsLogin] = useState(false)
    return (
        <>
            <IsLogin.Provider value={[isLogin, setIsLogin]}>
                <ThemeUser.Provider value={{ user, userDispatch }} >
                    {!isLogin && <Login></Login>}
                    {isLogin && <Avatar></Avatar>}
                </ThemeUser.Provider>
            </IsLogin.Provider>
        </>
    )
}

export default Home