import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
})
//     extraReducers: (builder) => {
//         builder
//             .addCase(register.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(register.fulfilled, (state, action) => {
//                 state.isLoading = false
//                 state.isSuccess = true
//                 state.user = action.payload
//             })
//             .addCase(register.rejected, (state, action) => {
//                 state.isLoading = false
//                 state.isError = true
//                 state.message = action.payload
//                 state.user = null
//             })
//             .addCase(login.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(login.fulfilled, (state, action) => {
//                 state.isLoading = false
//                 state.isSuccess = true
//                 state.user = action.payload
//             })
//             .addCase(login.rejected, (state, action) => {
//                 state.isLoading = false
//                 state.isError = true
//                 state.message = action.payload
//                 state.user = null
//             })
//             .addCase(logout.fulfilled, (state) => {
//                 state.user = null
//             })
//     },
// })

export const { reset } = goalSlice.actions
export default goalSlice.reducer
