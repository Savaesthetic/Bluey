import "./CreatePost.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/services/postApi";

const CreatePost = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const canSave = [title, content].every(Boolean);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (canSave) {
            try {
                const newPost = {
                    title: title,
                    content: content,
                    likes: 0,
                    dislikes: 0
                }
                await createPost(newPost);
                navigate('/');
            } catch (err) {
                console.error('Failed to save the post', err)
            }
        }

    }

    return (
        <section>
            <h2>Create a New Post</h2>
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
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}

export default CreatePost