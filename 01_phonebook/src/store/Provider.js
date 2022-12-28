import StoreContext from "./Context";
import { useReducer } from "react";
import { initState } from "./reducer";
import reducer from "./reducer";
export default function Provider({ children }) {
    
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
}
