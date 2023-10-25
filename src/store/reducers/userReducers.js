import { createSlice } from "@reduxjs/toolkit";


const userInitialState={
userInfo:null
}

const userSlice=createSlice({
    name:'user',
    initialState:userInitialState,
    reducers:{
   setUserInfo:(state,action)=>{
    state.userInfo=action.payload
   },
resetuserInfo(state,action){
    state.userInfo=null
}
    }

})
export const { userChange } = userSlice.actions

const userActions=userSlice.actions;
const userReducer=userSlice.reducer;

export {userActions,userReducer}