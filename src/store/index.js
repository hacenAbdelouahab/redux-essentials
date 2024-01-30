import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";
// import { legacy_createStore as createStore } from "redux";


// const counterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "increase":
//       return { ...state, value: state.value + action.payload };
//       break;
//     case "decrease":
//       return { ...state, value: state.value - 1 };
//       break;
//     case "toggleCounter":
//       return { ...state, showCounter: !state.showCounter };
//     default:
//       break;
//   }
//   return state;
// };

//

const store = configureStore({
    reducer: {
        counter: counterReducer, 
        auth: authReducer
    }
});

export default store;
