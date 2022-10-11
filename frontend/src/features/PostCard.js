import { useNavigate } from "react-router-dom"

const PostCard = ({ postData }) => {
    const navigate = useNavigate();

    const navigateToSinglePost = () => {
        navigate(`/posts/${postData._id}`)
    }

    return (
        <div onClick={navigateToSinglePost}>
            <p>Title: {postData.title}</p>
            <p>Content: {postData.content}</p>
            <p>Likes: {postData.likes} Dislikes: {postData.dislikes}</p>
        </div>
    )
}

export default PostCard