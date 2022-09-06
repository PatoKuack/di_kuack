import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Home } from "../pages/Home";
import { Blog } from "../pages/Blog";
import { NotFound } from "../pages/NotFound";


function App() {
  
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

/* 
BlogItem
ComentsCounter
ComentsItem
ComentsList
 */

export default App;
