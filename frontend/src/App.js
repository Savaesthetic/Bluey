import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home  from "./features/Home";
import CreatePost from "./features/CreatePost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/posts/create" element={<CreatePost />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
