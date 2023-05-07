import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { TopicContent } from "../pages/TopicContent";

function App() {
  const [theme, setTheme] = React.useState('');
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home theme={theme} changeTheme={setTheme} />} />
          <Route path='/blog' element={<Home theme={theme} changeTheme={setTheme} />} />
          <Route path='/blog/:slug' element={<TopicContent theme={theme} changeTheme={setTheme} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export { App };
