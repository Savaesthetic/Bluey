import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./features/posts/Home";
import CreatePost from "./features/posts/CreatePost";
import SinglePostPage from "./features/posts/SinglePostPage";
import UpdatePost from "./features/posts/UpdatePost";
import RegisterUser from "./features/users/RegisterUser";
import UserLogin from "./features/users/UserLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts/:postId" element={<SinglePostPage />} />
        <Route path="posts/create" element={<CreatePost />} />
        <Route path="posts/update/:postId" element={<UpdatePost />} />
        <Route path="users">
          <Route path="login" element={<UserLogin />} />
          <Route path="register" element={<RegisterUser />} />
        </Route>
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
