import { Link } from "react-router-dom"
import "./Header.css";

const Header = () => {
  return (
    <header>
        <h1>Bluey</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/posts/create">Create Post</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header