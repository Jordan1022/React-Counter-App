const initialState = {
  count: 0,
  clicks: 0,
  inputValue: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        clicks: state.clicks + 1
      };
      case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clicks: state.clicks + 1
      };
      case 'REPLACE':
      return {
        ...state,
        count: parseInt(state.inputValue),
        clicks: 0 
      };
      case 'CHANGE':
      return {
        ...state,
        inputValue: action.payload
      }
    default:
      return state;
  }
}

export default counterReducer;