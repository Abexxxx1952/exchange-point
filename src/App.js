import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Header } from "./Components/Header";
import { Main } from "./Pages/Main";
import { Footer } from "./Components/Footer";
import { Map } from "./Pages/Map";
import { GraphicOneValuta } from "./Pages/GraphicOneValuta";
import { About } from "./Pages/About";
import { NotFoundPage } from "./Pages/NotFoundPage";
import { ErrorFallback } from "./Pages/ErrorFallback";
import { Loader } from "./Components/Loader";
import { MENU_ITEMS } from "./Services/constants";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <Header menuItems={MENU_ITEMS} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/map" element={<Map />} />
          <Route
            path="/graphicOneValuta/:currentCurrency"
            element={<GraphicOneValuta />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
