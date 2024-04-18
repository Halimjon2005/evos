import React from "react";
import { Routes, Route } from "react-router-dom";
import Asosiy from "./page/Asosiy";
import Filyal from "./page/Filyal";
import Yangiliklar from "./page/Yangiliklar";
import Kontakt from "./page/Kontakt";
import Malumotlar from "./page/Malumotlar";
import Vakandlar from "./page/Vakandlar";
import Admin from "./page/Admin";
import Error404 from "./page/Error404";
import Product from "./page/Product";
import Xarita from "./page/Xarita";
import Karzina from "./page/Karzina";
import Yangilikga from "./page/Yangilikga";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Asosiy />} />
        <Route path="/filyal" element={<Filyal />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/vakand" element={<Vakandlar />} />
        <Route path="/malumotlar" element={<Malumotlar />} />
        <Route path="/yangiliklar" element={<Yangiliklar />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/karzina" element={<Karzina/>} />
        <Route path="*" element={<Error404/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/xarita/:id" element={<Xarita/>} />
        <Route path="/yangilik/:id" element={<Yangilikga/>} />



      </Routes>
    </>
  );
};

export default App;
