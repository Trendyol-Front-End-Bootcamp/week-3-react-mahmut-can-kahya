import { useEffect, useState } from "react";
import CharList from "../../components/CardList";
import { FilterSide } from "../../components/FilterSide";
import CharServices from "../../services/CharServices";

const HomePage = () => {
  const [chars, setChars] = useState([]);
  const [filtersValue, setFiltersValue] = useState({
    gender: "male",
    status: "all",
  });
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    CharServices.getFilteredChar({ ...filtersValue, page })
      .then((res) => {
        console.log(res);
        if (chars.length === 0) {
          return res.data.results;
        } else {
          return [...chars, ...res.data.results];
        }
        setPages(res.data.info.pages);
      })
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setChars(res);
          setLoading(false);
        }, 1.5 * 1000);
      });
  }, [filtersValue, page]);
  useEffect(() => {
    setPage(1);
    setChars([]);
  }, [filtersValue]);
  console.log(chars);
  return (
    <div className="App">
      <div>
        <FilterSide
          filtersValue={filtersValue}
          setFiltersValue={setFiltersValue}
        />
        <CharList
          chars={chars}
          loading={loading}
          page={page}
          setPage={setPage}
          pages={pages}
        />
        {loading && <div>Loading....</div>}
      </div>
    </div>
  );
};

export default HomePage;
