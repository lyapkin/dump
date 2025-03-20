const partnersReducer = (state, action) => {
  switch (action.type) {
    case partnersActions.NAME:
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
    case partnersActions.NUMBER:
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
    case partnersActions.EMAIL:
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
    case partnersActions.ENTITY:
      return {
        ...state,
        data: {
          ...state.data,
          entity: action.payload,
        },
        error: {
          ...state.error,
          entity: null,
        },
      };
    case partnersActions.CARD:
      return {
        ...state,
        data: {
          ...state.data,
          card: action.payload,
        },
        error: {
          ...state.error,
          card: null,
        },
      };
    case partnersActions.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case partnersActions.RESET:
      return {
        ...partnersInitState,
      };
    default:
      return state;
  }
};

export default partnersReducer;

export const partnersActions = {
  NAME: "name",
  NUMBER: "number",
  EMAIL: "email",
  ENTITY: "entity",
  CARD: "card",
  ERROR: "error",
  RESET: "reset",
};

export const partnersInitState = {
  data: {
    name: "",
    number: "",
    email: "",
    entity: "",
    card: "",
  },
  error: {
    name: null,
    number: null,
    email: null,
    entity: null,
    card: null,
  },
};
