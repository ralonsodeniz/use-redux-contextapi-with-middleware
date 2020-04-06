export const combineReducers = (reducers) => (state, action) =>
  Object.entries(reducers).reduce((accumulator, reducer) => {
    const [key, value] = reducer;
    return {
      ...accumulator,
      [key]: value(state[key], action),
    };
  }, {});
