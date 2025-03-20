const getPriceReducer = (state, action) => {
  switch (action.type) {
    case getPriceActions.NAME:
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
    case getPriceActions.NUMBER:
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
    case getPriceActions.EMAIL:
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
    case getPriceActions.COMMENT:
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
    case getPriceActions.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case getPriceActions.RESET:
      return {
        ...getPriceInitState,
      };
    default:
      return state;
  }
};

export default getPriceReducer;

export const getPriceActions = {
  NAME: "name",
  NUMBER: "number",
  EMAIL: "email",
  COMMENT: "comment",
  ERROR: "error",
  RESET: "reset",
};

export const getPriceInitState = {
  data: {
    name: "",
    number: "",
    email: "",
    comment: "",
  },
  error: {
    name: null,
    number: null,
    email: null,
    comment: null,
  },
};
