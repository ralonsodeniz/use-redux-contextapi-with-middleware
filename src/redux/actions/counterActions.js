import COUNTER from "../types/counterTypes";
import { getCharactersCount } from "../helpers/counterHelpers";

export const countAdd = () => ({ type: COUNTER.COUNT_ADD });

export const countSubtract = () => ({ type: COUNTER.COUNT_SUBTRACT });

export const countReset = () => ({ type: COUNTER.COUNT_RESET });

export const setCount = (count) => ({
  type: COUNTER.SET_COUNT,
  payload: count,
});

export const fetchCharactersCount = () => async (dispatch) => {
  const count = await getCharactersCount();
  dispatch(setCount(count));
};
