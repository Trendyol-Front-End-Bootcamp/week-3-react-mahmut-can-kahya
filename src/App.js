import { useEffect, useState } from "react";
import CharList from "./components/CardList";
import { FilterSide } from "./components/FilterSide";
import CharServices from "./services/CharServices";

export default function App() {
  const [chars, setChars] = useState([]);
  useEffect(() => {
    CharServices.getAllChar().then((res) => {
      setChars(res.data.results);
    });
  }, []);
  console.log(chars);
  return (
    <div className="App">
      <div>
        <FilterSide />
        <CharList chars={chars} />
      </div>
    </div>
  );
}
