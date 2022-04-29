const initialState = { coords: null, city: null, weather: null, error: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COORDS":
      return { ...state, coords: action.payload };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_WEATHER":
      return { ...state, weather: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
