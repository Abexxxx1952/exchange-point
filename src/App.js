import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Footer } from "./Components/Footer/Footer";
import { Map } from "./Components/Map/Map";
import { GraphicOneValute } from "./Components/GraphicOneValute/GraphicOneValute";
import { About } from "./Components/About/About";
import { NotFoundPage } from "./Components/NotFoundPage/NotFoundPage";
import { ErrorFallback } from "./Components/ErrorFallback/ErrorFallback";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/map" element={<Map />} />
          <Route path="/graphicOneValute:cc" element={<GraphicOneValute />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
