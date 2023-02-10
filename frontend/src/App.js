import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Single from "./components/Single";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Dashboard from "./components/admin/Dashboard";
import Nopage from "./components/Nopage";
import AddPost from "./components/admin/AddPost";
import About from "./components/About";
// import Login from "./components/admin/Login";

import "../src/App.css";
// import Navbar from "./components/Navbar";

import PostList from "./components/admin/PostList";
// import AddPost from "./components/admin/AddPost";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Nopage />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/article" element={<Single />}></Route>
          <Route path="/error" element={<Nopage />}></Route>
          <Route path="/add" element={<AddPost />}></Route>
          <Route path="/admin" element={<Dashboard />}></Route>
          <Route path="/admin-list" element={<PostList />}></Route>
          {/* <Route path="/admin-login" element={<Login />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
