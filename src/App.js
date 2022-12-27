import "./App.css";

import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";

import { Typology } from "./components/pages/typology/typology";

import { Economics } from "./components/pages/economics/economics";
import { Sociology } from "./components/pages/sociology/sociology";
import { Documents } from "./components/pages/documents/documents";


import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Main />
          </>
        }
      />
      <Route path="/typology" element={<Typology />} />
      <Route path="/economics" element={<Economics />} />
      <Route path="/sociology" element={<Sociology />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
    <Footer />
  </div>
  );
}

export default App;
