import "./PostCard.css";
import { useNavigate } from "react-router-dom";
import { BsFileArrowUp, BsFileArrowDown } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { updatePostThunk } from "../../redux/slices/post";
import { useDispatch } from "react-redux";

const PostCard = ({ postData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToSinglePost = () => {
    navigate(`/posts/${postData._id}`);
  };

  const voteClicked = (e, val) => {
    e.stopPropagation();

    const payload = {
      id: postData._id,
      updates: { votes: postData.votes + val },
    };
    dispatch(updatePostThunk(payload));
  };

  return (
    <div className="post-card" onClick={navigateToSinglePost}>
      <div id="post-card-votes">
        <BsFileArrowUp
          className="post-card-upvote"
          size={25}
          onClick={(e) => voteClicked(e, 1)}
        />
        {postData.votes}
        <BsFileArrowDown
          className="post-card-downvote"
          size={25}
          onClick={(e) => voteClicked(e, -1)}
        />
      </div>
      <div id="post-card-body">
        <div className="post-card-title">{postData.title}</div>
        <div className="post-card-content">{postData.content}</div>
        <div className="post-card-footer" id="post-card-footer">
          <div className="post-card-footer-element">
            <BiComment size={23} />
            <p>Comments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
