import axios from "axios";

class CharServices {
  /* 
  getAllChar = async () => {
    return await axios.get("https://rickandmortyapi.com/api/character/?");
  }; */
  getFilteredChars = async ({ gender, status, page }) => {
    return await axios.get(
      `https://rickandmortyapi.com/api/character/?${"page=" + page + "&"}${
        gender && gender !== "all" ? "gender=" + gender + "&" : ""
      }${status && status !== "all" ? "status=" + status : ""}
      `
    );
  };
  getSingleChar = async (id) => {
    return await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  };
}

export default new CharServices();
