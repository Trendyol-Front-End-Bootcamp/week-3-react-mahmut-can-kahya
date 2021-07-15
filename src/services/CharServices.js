import axios from "axios";

class CharServices {
  //verilen filtreye göre apiye istek gönderir
  getFilteredChars = async ({ gender, status, page }) => {
    return await axios.get(
      `https://rickandmortyapi.com/api/character/?${"page=" + page + "&"}${
        gender && gender !== "all" ? "gender=" + gender + "&" : ""
      }${status && status !== "all" ? "status=" + status : ""}
      `
    );
  };
  //parametre verilen id'ye göre apiye istek atar, karakter detayını döndürür
  getSingleChar = async (id) => {
    return await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  };
}

export default new CharServices();
