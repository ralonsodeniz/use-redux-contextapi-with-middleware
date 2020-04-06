export default (action, prevState, currentState) => {
  console.groupCollapsed("Logger", action.type);
  console.log("%c Action:", "color:blue", action);
  console.log("%c Previous State:", "color:red", prevState);
  console.log("%c Current State", "color:green", currentState);
  console.groupEnd();
};
