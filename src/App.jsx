import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="detail" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
