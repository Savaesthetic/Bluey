import "./PostForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/slices/post";

const CreatePost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  // make sure all fields are truthy which in this case means not empty
  const canSave = [title, content].every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (canSave) {
      const newPost = {
        title: title,
        content: content,
        votes: 0,
      };
      dispatch(createPost(newPost));
      navigate("/");
    }
  };

  return (
    <section id="post-form">
      <h1>Create a New Post</h1>
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
        <button type="button" onClick={handleSubmit} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
