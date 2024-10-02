import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./Components/TopNav";
import { Home } from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import Land from "./Pages/Land/Land";
import Sample from "./Pages/Land/Sample";

import House from "./Pages/House/House";
import HouseItem from "./Pages/Itempage/HouseItem";

import FilterPage from "./Pages/Filterpage/House";
import HideNavAndFooter from "./Components/HideNavAndFooter";
import AdminPannal from "./Admin/Pages/AdminPannal";
import Overview from "./Admin/Pages/Overview";

function App() {
  return (
    <>
      <BrowserRouter>
        <HideNavAndFooter>
          <TopNav />
        </HideNavAndFooter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/land" element={<Land />} />

          <Route path="/house" element={<House />} />
          <Route path="/houseItem" element={<HouseItem />} />

          <Route path="/filter" element={<FilterPage />} />
          <Route path="/admin" element={<AdminPannal />} />
          {/* <Route path="/overview" element={<Overview />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
