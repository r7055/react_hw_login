import { Avatar, Button } from '@mui/material';
import UpdateDetails from "./UpdateDetails";
import { createContext, Dispatch, useContext, useState } from "react";
import { ThemeUser } from './Navbar';

export const IsUpdate = createContext<[boolean, Dispatch<React.SetStateAction<boolean>>]>([false, () => null])



const avatar = () => {
    function stringToColor(string: string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }
    const userContext = useContext(ThemeUser)
    const [isUpdate, setIsUpdate] = useState(false)
    const name = userContext.user.firstName ? userContext.user.firstName : ''

    return (<>

        <Avatar sx={{ bgcolor: stringToColor(name) }}>{name[0]}</Avatar>
        <div>
            name: {userContext.user.firstName} {userContext.user.lastName}
        </div>
        <Button onClick={() => setIsUpdate(true)}>update user details</Button>

        <IsUpdate.Provider value={[isUpdate, setIsUpdate]}>
            {isUpdate && <UpdateDetails></UpdateDetails>}
        </IsUpdate.Provider>
    </>)
}
export default avatar







