import axios from "axios";

class CharServices {
  /* 
  getAllChar = async () => {
    return await axios.get("https://rickandmortyapi.com/api/character/?");
  }; */
  getFilteredChar = async ({ gender, status, page }) => {
    console.log(page);
    console.log(`character/?${
      gender && gender !== "all" ? "gender=" + gender + "&" : ""
    }${status && status !== "all" ? "status=" + status + "&" : ""}
    ${page ? "page=" + page : ""}`);
    return await axios.get(
      `https://rickandmortyapi.com/api/character/?${"page=" + page + "&"}${
        gender && gender !== "all" ? "gender=" + gender + "&" : ""
      }${status && status !== "all" ? "status=" + status : ""}
      `
    );
  };
}

export default new CharServices();
