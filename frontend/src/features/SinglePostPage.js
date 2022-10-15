import { useSelector, useDispatch } from "react-redux";
import { selectPostById, deletePostThunk, updatePostThunk } from "../redux/slices/post";
import { useParams, useNavigate } from "react-router-dom";
import { BsFileArrowUp, BsFileArrowDown } from 'react-icons/bs'
import { BiComment } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'
import "./PostCard.css";

const SinglePostPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { postId } = useParams();
    const post = useSelector(state => selectPostById(state, postId));

    const deletePostFunc = () => {
        dispatch(deletePostThunk(postId));
        navigate('/');
    }

    const editPost = () => navigate(`/posts/update/${postId}`);

    const voteClicked = (val) => {
        const payload = {
            id: post._id,
            updates: { votes: post.votes + val}
        }
        dispatch(updatePostThunk(payload));
    }

    return (
        <div className='single-post'>
            <div id='post-card-votes'>
                <BsFileArrowUp className='post-card-upvote' size={25} onClick={() => voteClicked(1)}/> 
                {post.votes} 
                <BsFileArrowDown className='post-card-downvote' size={25} onClick={() => voteClicked(-1)}/>
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