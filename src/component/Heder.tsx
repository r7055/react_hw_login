import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router';
import { createContext, Dispatch, useReducer, useState } from 'react';
import  { action, actionUser, UserType } from '../types/userType';
import Login from './Login';
import Avatar from './Avatar';
import Navbar from './Navbar';
import UpdateDetails from './UpdateDetails';

export const UsrReducer = createContext<{ user: UserType, userDispatch: Dispatch<action> }>(
    {
        user: {},
        userDispatch: () => null
    })

export const IsLogin = createContext<[boolean, Dispatch<React.SetStateAction<boolean>>]>([false, () => null])

const Header = () => {

    const [user, userDispatch] = useReducer(actionUser, {
        id:0,
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        address:'',
        phon:''
    })
    const [isLogin, setIsLogin] = useState(false)
    console.log(isLogin);
    return (
        <IsLogin.Provider value={[isLogin, setIsLogin]}>
            <UsrReducer.Provider value={{ user, userDispatch }} >
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box>
                                {!isLogin && <Login />}
                                {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}> */}
                                    {isLogin && <Avatar />}
                                    {isLogin && <UpdateDetails />}
                                {/* </div> */}
                            </Box>

                            <Box>
                                <Navbar />
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Outlet />
                </Box>
            </UsrReducer.Provider>
        </IsLogin.Provider>
    );
}

export default Header