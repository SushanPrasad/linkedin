import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState :{
     //2.add ==> :{user:null}
    user:null,
  },
                                 // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
//5. change  increment, decrement ==> login, logout...   
    login: (state, action) => {

//7. change below as "state.value = action.payload" and above add "action "
      
      state.user = action.payload;
   
   
   
                        },

    logout: (state) => {
//6. change state.value+=1 ==> belowgiven    
    
state.user = null;
},
   
  },

});
 

//8. change inc,dec, ==> login,logout below
export const { login, logout } = userSlice.actions;


//3.change counter==> user below

export const selectUser = (state) => state.user.user;



export default userSlice.reducer;
