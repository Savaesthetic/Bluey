import "./PostForm.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../api/services/postApi";
import { useDispatch, useSelector } from 'react-redux';
import { selectPostById, updatePost as updateReduxPost } from "../redux/slices/post";

const UpdatePost = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { postId } = useParams();
    const post = useSelector(state => selectPostById(state, postId));

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const canUpdate = [title, content].every(Boolean);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (canUpdate) {
            try {
                const updates = {
                    title: title,
                    content: content,
                }

                const res = await updatePost({id: post._id, updates: updates});
                // I destructure the returned object here because setting the changes in the dispath 
                // to the whole object causes issues with rerendering the home page
                const { _id, ...changes} = await res.data;

                dispatch(updateReduxPost({ id: _id, changes: changes }));
                navigate('/');
            } catch (err) {
                console.error('Failed to save the post', err)
            }
        }
    }

    return (
        <section id='post-form'>
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
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canUpdate}
                >Update Post</button>
            </form>
        </section>
    )
}

export default UpdatePost