import { useState } from "react";
import AddButton from "./components/AddButton/AddButton";
import Items from "./components/Items/Items";

function App() {
  const [view, setView] = useState(false);

  return (
    <>
      <AddButton setView={setView} view={view} />
      <Items view={view} />
    </>
  );
}

export default App;
