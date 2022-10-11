import { useSelector } from "react-redux";
import { selectAllPosts } from "../redux/slices/post";
import PostCard from "./PostCard";

const Home = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <div>
      {posts.map(post => <PostCard key={post._id} postData={post} />)}
    </div>
  )
}

export default Home