import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DetailProperty from "./DetailProperty";
import Home from "./Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
      <Routes>
      <Route path="property">
        <Route path=":externalID" element={<DetailProperty />} />
      </Route>
    </Routes>
      <Footer/>
    </>
  );
}

export default App;
