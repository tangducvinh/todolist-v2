import { createSlice } from '@reduxjs/toolkit'


type InitialState = {
    dataRegister: {
        email: string,
        password: string,
    }
}

const initialState:InitialState = {
    dataRegister: {
        email: '',
        password: ''
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setDataRegister: (state, action) => {
            state.dataRegister = action.payload
        }
    }
})

export const { setDataRegister } = userSlice.actions