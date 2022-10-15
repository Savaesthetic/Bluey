import "./PostCard.css";
import { useNavigate } from "react-router-dom"
import { BsFileArrowUp, BsFileArrowDown } from 'react-icons/bs'
import { BiComment } from 'react-icons/bi'

const PostCard = ({ postData }) => {
    const navigate = useNavigate();

    const navigateToSinglePost = () => {
        navigate(`/posts/${postData._id}`)
    }

    // const like = async (change) => {
    //     let update = postData;
    //     update.likes = update.likes + change;

    //     const res = await updatePost(updatedPost);
    //     // I destructure the returned object here because setting the changes in the dispath 
    //     // to the whole object causes issues with rerendering the home page
    //     const { _id, ...changes} = await res.data;

    //     dispatch(updateReduxPost({ id: _id, changes: changes }));
    // }
    const callEvent = (e) => {
        e.stopPropagation();
        console.log('event');
    }

    return (
        <div className='post-card' onClick={navigateToSinglePost}>
            <div id='post-card-votes'>
                <BsFileArrowUp className='post-card-upvote' size={25} onClick={e => callEvent(e)}/> 
                {postData.votes} 
                <BsFileArrowDown className='post-card-downvote' size={25} onClick={e => callEvent(e)}/>
            </div>
            <div id='post-card-body'>
                <div className='post-card-title'>{postData.title}</div>
                <div className='post-card-content'>{postData.content}</div>
                <div className='post-card-footer' id='post-card-footer'>
                    <div className="post-card-footer-element">
                        <BiComment size={23}/>
                        <p>Comments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard