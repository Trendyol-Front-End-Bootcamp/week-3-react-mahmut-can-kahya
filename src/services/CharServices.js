import axios from "axios";

class CharServices {
  getAllChar = async () => {
    return await axios.get("https://rickandmortyapi.com/api/character");
  };
}

export default new CharServices();
