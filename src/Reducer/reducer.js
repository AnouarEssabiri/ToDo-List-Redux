const initialState = {
    taches: [],
  };
  
  const reducerFunction = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TACHE":
        return {
          ...state,
          taches: [...state.taches, action.payload],
        };
  
      case "DELETE_TACHE":
        return {
          ...state,
          taches: state.taches.filter((tache) => tache.id !== action.payload.id),
        };
  
      default:
        return state; 
    }
  };
  
  export default reducerFunction;
  