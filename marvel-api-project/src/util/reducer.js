export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_RESULTS":
      return {
        ...state,
        loading: false,
        results: action.payload.data.results,
      };
    case "HANDLE_SEARCH":
      return {
        ...state,
        query: action.payload,
      };
    default:
      throw new Error(`No Results ${action.type} `);
  }
};
