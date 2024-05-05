import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from "./Components/Header";
import Main from "./Pages/Main/main";
import Catalog from "./Pages/Catalog/Catalog";
import {Base} from "./Scripts/Base";
import FindPage from "./Pages/FindPage/FindPage";


function App() {
    const base = new Base()
    base.init();
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Header/>}>
                      <Route index element={<Main/>} />
                      <Route path="movies" element={<Catalog films={base.movies} type="movies"/>} />
                      <Route path="cartoon" element={<Catalog films={base.cartoons} type="cartoons"/>} />
                      <Route path="series" element={<Catalog films={base.series} type="series"/>} />
                      <Route path="search" element={<FindPage/>}/>
                      <Route path="*" element={<p>404 page not found</p>} />
                  </Route>
              </Routes>
          </BrowserRouter>
          <Footer/>
      </>

  );
}

export default App;
