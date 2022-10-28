import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../redux/slices/user";
import UserDropdown from "../features/users/UserDropdown";
import "./Header.css";

const Header = () => {
  const users = useSelector(selectAllUsers);

  return (
    <header>
      <h1>Bluey</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts/create">Create Post</Link>
          </li>
          {users.length ? (
            <UserDropdown username={users[0].username} />
          ) : (
            <>
              <li>
                <Link to="/users/login">Login</Link>
              </li>
              <li>
                <Link to="/users/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
