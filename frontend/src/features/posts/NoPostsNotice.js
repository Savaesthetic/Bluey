import { Link } from "react-router-dom";

const NoPostsNotice = () => {
  return (
    <div>
      There are no posts. Create a post to view here at the{" "}
      <Link to="/posts/create">CreatePost</Link> page.
    </div>
  );
};

export default NoPostsNotice;
