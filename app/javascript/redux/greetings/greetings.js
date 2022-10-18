import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const getGreetings = createAsyncThunk("greetings/getGreetings", async () => {
   const response = fetch("http://127.0.0.1:3000/api/v1/greetings")
    .then((response) => response.json())
    .then((data) => data);
    return response;  
});
  


// export const greet = data => ({
//     type: GET_GREETINGS,
//     data,
// });

// export default function greetingsReducer(state = [], action = {}) {
//   switch (action.type) {
//     case GET_GREETINGS:
//       return action.payload;
//     default:
//       return state;
//   }
// }

const initialState = {
    message: "No Message",
  };
  
  const greetingsReducer = createSlice({
    name: "message",
    initialState,
    reducers: {},
    extraReducers: {
      [getGreetings.fulfilled]: (state, action) => ({
        ...state,
        message: action.payload,
      }),
      [getGreetings.rejected]: (state) => ({
        ...state,
      }),
    },
  });
  
  export default greetingsReducer.reducer;
