// import { createContext, Dispatch, useReducer, useState } from "react"
// import userType, { action, UserType } from "../types/userType"
// import Avatar from "./Avatar"
// import Login from "./Login"
// import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
// import { Link, Outlet } from "react-router"



// export const ThemeUser = createContext<{ user: UserType, userDispatch: Dispatch<action> }>(
//     {
//         user: {},
//         userDispatch: () => null
//     })

// export const IsLogin = createContext<[boolean, Dispatch<React.SetStateAction<boolean>>]>([false, () => null])

// const Heder = () => {
//     const [user, userDispatch] = useReducer(userType, {} as UserType)
//     const [isLogin, setIsLogin] = useState(false)
//     return (
//         <>
//             <Box sx={{ flexGrow: 1 }}>
//                 <AppBar position="static">
//                     <Toolbar>
//                         <IsLogin.Provider value={[isLogin, setIsLogin]}>
//                             <ThemeUser.Provider value={{ user, userDispatch }} >
//                                 <nav>
//                                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                                         <Link to='/'>Home</Link>
//                                     </Typography>
//                                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                                         <Link to='/about'>About</Link>
//                                     </Typography>

//                                 </nav>
//                                 <Outlet />
//                                 {/* <Button onClick={handelLogin} color='inherit'>login</Button> */}
//                                 <Button color='inherit'>logout</Button>
//                                 {!isLogin && <Login></Login>}
//                                 {isLogin && <Avatar></Avatar>}
//                             </ThemeUser.Provider>
//                         </IsLogin.Provider>
//                     </Toolbar>
//                 </AppBar>
//             </Box>



//         </>
//     )
// }

// export default Heder