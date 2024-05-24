import { combineReducers } from "redux";
import { LockalStorageData } from "../hooks/getlockalstoragedata";

let initialData = [
  {id: 'id-1', name: 'Rsie Simpson', number: '459-12-56' },
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
]

let getLocalStorageData = LockalStorageData(initialData)

const initialState = {
  items: getLocalStorageData,
  filters: ''
};
 
const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "items/addItem":
       return {
        ...state,
        items: [
          ...state.items,action.payload.text
        ]
      };
    case "items/deleteItem":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.text)
      };
      case "items/filterItem":
        return {
          ...state,
          filters: action.payload.text
        };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  items: itemsReducer,
});
