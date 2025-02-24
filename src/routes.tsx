import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, PageBase, NotFound } from "./pages";
import { AppContextProvider } from "./contexts";

function AppRoutes() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageBase />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default AppRoutes;
