import { useEffect, useState } from "react";
import CharList from "../../components/CardList";
import { FilterSide } from "../../components/FilterSide";
import Loading from "../../core/components/Loading";
import CharServices from "../../services/CharServices";

const HomePage = () => {
  const [chars, setChars] = useState([]);
  const [filtersValue, setFiltersValue] = useState({
    gender: "all",
    status: "all",
  });
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);

  //karakter servisinden filtrelenmiş veriyi çeker.
  const getChars = async (filter, pageNum, prevChars) => {
    setLoading(true);
    await CharServices.getFilteredChars({ ...filter, page: pageNum }).then(
      (res) => {
        console.log(res.config.url);
        setPages(res.data.info.pages);
        if (chars.length === 0) {
          setChars(res.data.results);
        } else {
          setChars([...prevChars, ...res.data.results]);
        }
      }
    );
    setTimeout(() => {
      setLoading(false);
    }, 0.75 * 1000);
  };

  //Filtre değiştiğinde sayfa numarasını sıfırlar ve apiye yeni filtreyle istek atar.
  useEffect(() => {
    setPage(1);
    setChars([]);
    getChars(filtersValue, 1, []);
  }, [filtersValue]);

  //sayfa numarası değiştikçe apiye istek atar
  useEffect(() => {
    if (chars.length !== 0) {
      getChars(filtersValue, page, chars);
    }
  }, [page]);
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
