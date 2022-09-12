import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Blog } from "../pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Home />} />
          <Route path={'/blog/*'} element={<Blog />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
