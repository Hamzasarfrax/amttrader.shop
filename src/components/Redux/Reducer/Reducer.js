
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
  const INITIALSTATE={
     carts:[]
  };
<ToastContainer />
  export const CartReducer=(state=INITIALSTATE, action)=>{
switch(action.type){
    case "ADD_CART":
            const indextitem = state.carts.findIndex((item) => item.id === action.payload.id);

            if (indextitem >= 0) {
                state.carts[indextitem].total += 1
            } else {
                const temp = { ...action.payload,
                    total: 1
                }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }
    
     case "RMV_CART":
const data=state.carts.filter((el)=>el.id !== action.payload)
     return {
          ...state,
          carts:data
     }
     case "ADD_ONE":
      
     const item = state.carts.find((item) => item.quantity === action.payload);
     item.quantity++;
     return{
        ...state,
        carts:[...state.carts,item]
     }
  
  
  
  
     case "RMV-ONE":
   

     const item2 = state.carts.find((item) => item.id === action.payload);
     if (item2.quantity === 1) {
        item2.quantity = 1
     } else {
        item2.quantity--;
     }
  




    
     
default:
return state

}
  };