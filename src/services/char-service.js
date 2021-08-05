import axios from "axios";

class CharServices {
  //verilen filtreye göre apiye istek gönderir
  getFilteredChars = async ({ gender, status, page }) => {
    const result = await axios.get(
      `https://rickandmortyapi.com/api/character/?${"page=" + page + "&"}${
        gender && gender !== "all" ? "gender=" + gender + "&" : ""
      }${status && status !== "all" ? "status=" + status : ""}`
    );
    console.log(result);
    if (result.status !== 200) {
      return [];
    }
    return result.data;
  };
  //parametre verilen id'ye göre apiye istek atar, karakter detayını döndürür
  getCharDetail = async (id) => {
    const result = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    if (result.status !== 200) {
      return {};
    }
    return result.data;
  };
}

export default new CharServices();
