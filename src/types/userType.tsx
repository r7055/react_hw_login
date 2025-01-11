export type UserType = {
    id?:number,
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    address?: string,
    phon?: string
}

export type action = {
    type: 'ADD_USER',
    data: Partial<UserType> & { email?: string } & { password?: string }
} | {
    type: 'DELETE_USER',
    data: Partial<UserType> & { email?: string }
} | {
    type: 'UPDATE',
    data: UserType
} | {
    type: 'GET',
    data: Partial<UserType> & { email?: string }
}

import axios from "axios"
const url="http://localhost:3000"

const  actionUser= async (state: UserType, action: action) => {
    switch (action.type) {
        case 'ADD_USER':
            console.log("add user");
            
                try {
                    const res= await axios.post(`${url}/api/user/register`,
                        {
                            email: action.data.email,
                            password :action.data.password
                        }
                    )
                    state.id=res.data.userId
                }
                catch(e:any){
                    console.log(e);
                    if (e.status === 422)
                        alert('user already sign up')
                }
        case 'DELETE_USER':
            ////go to home!!!!
            return state//[...state.filter(u => u.email !== action.data.email)]
        case 'UPDATE':
            state = action.data
            return state
        default://'GET'
            //[...state.filter(u => u.email === action.data.email)]
            return state
    }
}

export default actionUser