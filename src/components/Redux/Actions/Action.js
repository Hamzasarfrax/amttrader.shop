export const ADD=(item)=>{
    return {
      type:"ADD_CART",
      payload:item
    }
 
 }
 
 
 export const DLT=(id)=>{
      return {
        type:"RMV_CART",
        payload:id
      }
   
   }

   export const ADD_ONE = (items) => {

    return {
        type: "ADD_ONE",
        payload: items,
    }

}
   export const REMOVE = (items) => {

    return {
        type: "RMV-ONE",
        payload: items,
    }

}