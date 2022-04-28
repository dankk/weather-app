const initialState = { coords: {}, city: null, weather: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COORDS":
      return { ...state, coords: action.payload };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_WEATHER":
      return { ...state, weather: action.payload };
    default:
      return state;
  }
};

export default reducer;
