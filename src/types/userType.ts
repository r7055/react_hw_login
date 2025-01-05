export type UserType = {
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

export default (state: UserType, action: action): UserType => {
    switch (action.type) {
        case 'ADD_USER':
            if (state.email !== action.data.email && state.password !== action.data.password)
                state = action.data
            return state
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