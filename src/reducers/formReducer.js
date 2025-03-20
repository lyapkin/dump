const formReducer = (state, action) => {
  switch (action.type) {
    case formActions.NAME:
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
    case formActions.NUMBER:
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
    case formActions.COMPANY_NAME:
      return {
        ...state,
        data: {
          ...state.data,
          company_name: action.payload,
        },
        error: {
          ...state.error,
          company_name: null,
        },
      };
    case formActions.ACTIVITY_TYPE:
      return {
        ...state,
        data: {
          ...state.data,
          activity_type: action.payload,
        },
        error: {
          ...state.error,
          activity_type: null,
        },
      };
    case formActions.COMMENT:
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
    case formActions.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case formActions.RESET:
      return {
        ...formInitState,
      };
    default:
      return state;
  }
};

export default formReducer;

export const formActions = {
  NAME: "name",
  NUMBER: "number",
  COMPANY_NAME: "company",
  ACTIVITY_TYPE: "activity",
  COMMENT: "comment",
  ERROR: "error",
  RESET: "reset",
};

export const formInitState = {
  data: {
    name: "",
    number: "",
    company_name: "",
    activity_type: "",
    comment: "",
  },
  error: {
    name: null,
    number: null,
    company_name: null,
    activity_type: null,
    comment: null,
  },
};
