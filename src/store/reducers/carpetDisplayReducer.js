import { carpetActions } from "../actions/carpetActions";

const initialState = {
  carpets: [],
  singleCarpet:[],
};

export function carpetDisplayReducer(state = initialState, action) {
  switch (action.type) {
    case carpetActions.getCarpets:
      return { carpets: [...action.payload] };
    case carpetActions.getSingleCarpet:
      console.log(action.payload);
      return { singleCarpet: action.payload };
    default:
      return state;
  }
}
