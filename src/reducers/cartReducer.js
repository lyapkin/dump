const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActions.NAME:
      return {
        ...state,
        data: {
          ...state.data,
          name: action.payload,
        },
        error: {
          ...state.error,
          name: null,
        },
      };
    case cartActions.NUMBER:
      return {
        ...state,
        data: {
          ...state.data,
          number: action.payload,
        },
        error: {
          ...state.error,
          number: null,
        },
      };
    case cartActions.EMAIL:
      return {
        ...state,
        data: {
          ...state.data,
          email: action.payload,
        },
        error: {
          ...state.error,
          email: null,
        },
      };
    case cartActions.ADDRESS:
      return {
        ...state,
        data: {
          ...state.data,
          delivery_address: action.payload,
        },
        error: {
          ...state.error,
          delivery_address: null,
        },
      };
    case cartActions.COMMENT:
      return {
        ...state,
        data: {
          ...state.data,
          comment: action.payload,
        },
        error: {
          ...state.error,
          comment: null,
        },
      };
    // case cartActions.PAY_METHOD:
    //     return {
    //         ...state,
    //         data: {
    //             ...state.data,
    //             payment_method: action.payload
    //         },
    //         error: {
    //             ...state.error,
    //             payment_method: null
    //         }
    //     }
    case cartActions.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case cartActions.RESET:
      return {
        ...cartInitState,
      };
    default:
      return state;
  }
};

export default cartReducer;

export const cartActions = {
  NAME: "name",
  NUMBER: "number",
  EMAIL: "email",
  ADDRESS: "address",
  COMMENT: "comment",
  // PAY_METHOD: 'payMethod',
  ERROR: "error",
  RESET: "reset",
};

export const cartInitState = {
  data: {
    name: "",
    number: "",
    email: "",
    delivery_address: "",
    comment: "",
    // payment_method: '',
  },
  error: {
    name: null,
    number: null,
    email: null,
    delivery_address: null,
    comment: null,
    // payment_method: null,
  },
};
