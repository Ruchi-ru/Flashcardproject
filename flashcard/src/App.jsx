import Flashcard from "./Component/Flashcard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Component/Form";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Flashcard />}></Route>
          <Route exact path="/form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
