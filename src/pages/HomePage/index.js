import { useEffect, useState } from "react";
import CharList from "../../components/CardList";
import { FilterSide } from "../../components/FilterSide";
import Loading from "../../core/components/Loading";
import CharService from "../../services/char-service";

const HomePage = () => {
  const [chars, setChars] = useState([]);
  const [filtersValue, setFiltersValue] = useState({
    gender: "all",
    status: "all",
  });
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const resetFilter = () => {
    setPage(1);
    setChars([]);
  };

  //karakter servisinden filtrelenmiş veriyi çeker.
  const getChars = async (filter, pageNum, prevChars) => {
    setLoading(true);
    const result = await CharService.getFilteredChars({
      ...filter,
      page: pageNum,
    });

    setPageCount(result.info.pageCount);
    if (chars.length === 0) {
      setChars(result.results);
    } else {
      setChars([...prevChars, ...result.results]);
    }

    setTimeout(() => {
      setLoading(false);
    }, 0.75 * 1000);
  };

  //Filtre değiştiğinde sayfa numarasını sıfırlar ve apiye yeni filtreyle istek atar.
  useEffect(() => {
    resetFilter();
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
          pageCount={pageCount}
        />
        <Loading loading={loading} />
      </div>
    </div>
  );
};

export default HomePage;
