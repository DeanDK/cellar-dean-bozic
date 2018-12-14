export default function(state = {}, action) {
  switch (action.type) {
    case "GET_WINES":
      return { ...state, wineList: action.payload };
    default:
      return state;
  }
}
