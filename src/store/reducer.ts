import { UPDATE_OBJECT } from './actions';

interface action{
  type: string,
  payload: object
}

interface Car {
  price: string;
  description: string;
}

interface State {
  [carName: string]: Car;
}

const initialState: State = {
  "skoda": {
    price: "5000",
    description: "good car",
  },
  "marcedec": {
    price: "10000",
    description: "good car",
  },
};



const objectReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case UPDATE_OBJECT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default objectReducer;
