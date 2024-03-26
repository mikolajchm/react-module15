import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Addpost from "./components/pages/Addpost/Addpost";
import About from "./components/pages/About/About";
import Editpost from "./components/pages/Editpost/Editpost";
import Post from "./components/pages/Post/Post";
import NotFound from "./components/pages/NotFound/NotFound";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import Categories from "./components/pages/Categories.js/Categories";


function App() {
  return (
    <main>
       <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<Addpost />} />
          <Route path="/post/edit/:id" element={<Editpost />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;