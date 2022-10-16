import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, fetchPosts } from "../redux/slices/post";
import PostCard from "./PostCard";
import { useEffect } from "react";
import NoPostsNotice from "./NoPostsNotice";

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
      {posts.length === 0 ? <NoPostsNotice /> : posts.map(post => <PostCard key={post._id} postData={post} />)}
    </section>
  )
}

export default Home