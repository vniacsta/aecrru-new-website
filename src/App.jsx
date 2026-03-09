import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/quem-somos" element={<AboutPage />} />
        <Route path="/areas-de-intervencao" element={<WorkPage />} />
        <Route path="/contactos" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
