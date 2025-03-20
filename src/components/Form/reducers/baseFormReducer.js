const baseFormReducer = (state, action) => {
  switch (action.type) {
    case baseFormActions.NAME:
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
    case baseFormActions.NUMBER:
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
    case baseFormActions.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case baseFormActions.RESET:
      return {
        ...baseFormInitState,
      };
    case baseFormActions.RESET_GLOBAL_ERRORS:
      return {
        ...state,
        error: {
          ...state.error,
          global: null,
        },
      };
    default:
      return state;
  }
};

export default baseFormReducer;

export const baseFormActions = {
  NAME: "name",
  NUMBER: "number",
  ERROR: "error",
  RESET: "reset",
  RESET_GLOBAL_ERRORS: "reset_g",
};

export const baseFormInitState = {
  data: {
    name: "",
    number: "",
  },
  error: {
    name: null,
    number: null,
    global: null,
  },
};
