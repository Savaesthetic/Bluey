import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home  from "./features/Home";
import CreatePost from "./features/CreatePost";
import SinglePostPage from "./features/SinglePostPage";
import UpdatePost from "./features/UpdatePost";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/posts/:postId" element={<SinglePostPage />} />
        <Route path="/posts/create" element={<CreatePost />} />
        <Route path="/posts/update/:postId" element={<UpdatePost />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
