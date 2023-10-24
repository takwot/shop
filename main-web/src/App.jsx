import { useState } from "react";
import Items from "./components/Items/Items";
import Search from "./components/Search/Search";

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <Search value={value} setValue={setValue} />
      <Items value={value} />
    </>
  );
}

export default App;
