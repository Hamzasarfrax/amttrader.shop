
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
     const modifiedCarts1 = state.carts.map((item) => {
         if (item.id === action.payload) {
             return {...item, quantity: item.quantity + 1};
         }
         return item;
     });
     return {
         ...state,
         carts: modifiedCarts1
     }
 
 case "RMV-ONE":
     const modifiedCarts = state.carts.map((item) => {
         if (item.id === action.payload) {
            if(item.quantity===1){
              return {...item, quantity: item.quantity + 1};
            }
            else{
              return {...item, quantity: item.quantity - 1};
            }
         }
         return item;
     });
     return {
         ...state,
         carts: modifiedCarts
     }
 
    
  




    
     
default:
return state

}
  };