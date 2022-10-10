import { useSelector } from "react-redux";
import { selectAllPosts } from "../redux/slices/post";

const Home = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <div>
      <ul>
          {posts?.map(post => <li key={post._id}>Title: {post.title}, Content: {post.content}</li>)}
        </ul>
    </div>
  )
}

export default Home