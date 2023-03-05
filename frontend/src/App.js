import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Blogpost from "./pages/Blogpost";
import Faq from "./pages/Faqs";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import { Provider } from "react-redux";
import store from './store/store'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blogpost />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/search/:text" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
