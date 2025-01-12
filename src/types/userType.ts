export type UserType = {
    id?: number,
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    address?: string,
    phon?: string
}

export type action = {
    type: 'ADD_USER',
    data: Partial<UserType> & { email?: string } & { password?: string } & { id?: number }
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


export const actionUser =  (state: UserType, action: action) => {
    switch (action.type) {
        case 'ADD_USER':
            return  { ...state, ...action.data }
        case 'DELETE_USER':
            //go to home!!
            return state//[...state.filter(u => u.email !== action.data.email)]
        case 'UPDATE':
            state = {...state,...action.data}
            return state
        default://'GET'
            //[...state.filter(u => u.email === action.data.email)]
            return state
    }
}

  