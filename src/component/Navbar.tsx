import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router';
import { createContext, Dispatch, useReducer, useState } from 'react';
import userType, { action, UserType } from '../types/userType';
import Login from './Login';
import Avatar from './Avatar';

export const ThemeUser = createContext<{ user: UserType, userDispatch: Dispatch<action> }>(
    {
        user: {},
        userDispatch: () => null
    })

export const IsLogin = createContext<[boolean, Dispatch<React.SetStateAction<boolean>>]>([false, () => null])

export default function MenuAppBar() {

    const [user, userDispatch] = useReducer(userType, {} as UserType)
    const [isLogin, setIsLogin] = useState(false)
    console.log(isLogin);
    return (
        <IsLogin.Provider value={[isLogin, setIsLogin]}>
            <ThemeUser.Provider value={{ user, userDispatch }} >
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <nav>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    <Link to='/'>Home</Link>
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    <Link to='/about'>About</Link>
                                </Typography>
                            </nav>
                            {!isLogin && <Login />}
                            {isLogin && <Avatar />}
                        </Toolbar>
                    </AppBar>
                    <Outlet />
                </Box>
            </ThemeUser.Provider>
        </IsLogin.Provider>
    );
}

