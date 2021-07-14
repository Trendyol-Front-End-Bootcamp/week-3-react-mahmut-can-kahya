import { useEffect, useState } from "react";
import CharList from "../../components/CardList";
import { FilterSide } from "../../components/FilterSide";
import Loading from "../../core/Loading";
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
        setPages(res.data.info.pages);
        if (chars.length === 0 || pages === page) {
          return res.data.results;
        } else {
          return [...chars, ...res.data.results];
        }
      })
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setChars(res);
          setLoading(false);
        }, 0.75 * 1000);
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
        <Loading loading={loading} />
      </div>
    </div>
  );
};

export default HomePage;
