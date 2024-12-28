import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home_page";
import CrewPage from "./pages/crew_page";
import PhotographyPage from "./pages/photography_page";
import FilmPage from "./pages/film_page";
import AboutUsPage from "./pages/about_us_page";
import AppLayout from "./layouts/app_layout";
import ContactPage from "./pages/contact_page";
import ContactLayout from "./layouts/contact_layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/film" element={<FilmPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Route>
        <Route element={<ContactLayout />}>
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
