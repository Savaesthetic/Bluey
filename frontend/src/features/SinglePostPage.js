import { useSelector, useDispatch } from "react-redux";
import { selectPostById, deletePost as reduxDeletePost } from "../redux/slices/post";
import { useParams, useNavigate } from "react-router-dom";
import { deletePost } from "../api/services/postApi";

const SinglePostPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { postId } = useParams();
    const post = useSelector(state => selectPostById(state, postId));

    const deletePostFunc = async () => {
        try {
            await deletePost(postId);
            dispatch(reduxDeletePost(postId));
            navigate('/');
        } catch (err) {
            console.error('Failed to delete the post', err);
        }
    }

    const updatePost = () => navigate(`/posts/update/${postId}`);

    return (
        <div>
            <p>{post.title}</p>
            <button onClick={deletePostFunc}>Delete</button>
            <button onClick={updatePost}>Update</button>
        </div>
    )
}

export default SinglePostPage