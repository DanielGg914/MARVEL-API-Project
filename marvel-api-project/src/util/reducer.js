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
    case "SET_COMICS":
      return {
        ...state,
        loading: false,
        comics: action.payload.data.results.comics,
      };
    default:
      throw new Error(`No Results ${action.type} `);
  }
};
