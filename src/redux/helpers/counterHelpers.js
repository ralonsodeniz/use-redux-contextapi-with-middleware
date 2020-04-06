import axios from "axios";

export const getCharactersCount = async () => {
  const {
    data: { count },
  } = await axios.get("https://swapi.co/api/people/");

  return count;
};
