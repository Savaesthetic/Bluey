import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, fetchPosts } from "../redux/slices/post";
import PostCard from "./PostCard";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch]);

  return (
    <section id="home-page">
      {posts.map(post => <PostCard key={post._id} postData={post} />)}
    </section>
  )
}

export default Home