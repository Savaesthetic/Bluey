import "./PostForm.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectPostById, updatePostThunk } from "../../redux/slices/post";

const UpdatePost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const canUpdate = [title, content].every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (canUpdate) {
      const updates = {
        title: title,
        content: content,
      };
      dispatch(updatePostThunk({ id: post._id, updates: updates }));
      navigate("/");
    }
  };

  return (
    <section id="post-form">
      <h1>Update Post</h1>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={handleSubmit} disabled={!canUpdate}>
          Update Post
        </button>
      </form>
    </section>
  );
};

export default UpdatePost;
