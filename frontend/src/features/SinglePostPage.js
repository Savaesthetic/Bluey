import { useSelector, useDispatch } from "react-redux";
import { selectPostById, deletePost as reduxDeletePost } from "../redux/slices/post";
import { useParams, useNavigate } from "react-router-dom";
import { deletePost } from "../api/services/postApi";
import { BsFileArrowUp, BsFileArrowDown } from 'react-icons/bs'
import { BiComment } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'
import "./PostCard.css";

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

    const editPost = () => navigate(`/posts/update/${postId}`);

    const callEvent = (e) => {
        console.log('event');
    }

    return (
        <div className='single-post'>
            <div id='post-card-votes'>
                <BsFileArrowUp className='post-card-upvote' size={25} onClick={e => callEvent(e)}/> 
                {post.votes} 
                <BsFileArrowDown className='post-card-downvote' size={25} onClick={e => callEvent(e)}/>
            </div>
            <div id='post-card-body'>
                <div className='post-card-title'>{post.title}</div>
                <div className='post-card-content'>{post.content}</div>
                <div className='post-card-footer' id='post-card-footer'>
                    <div className="post-card-footer-element">
                        <BiComment size={23}/>
                        <p>Comments</p>
                    </div>
                    <div className="post-card-footer-element" onClick={deletePostFunc}>
                        <RiDeleteBinLine size={23}/>
                        <p>Delete</p>
                    </div>
                    <div className="post-card-footer-element" onClick={editPost}>
                        <BiComment size={23}/>
                        <p>Edit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage