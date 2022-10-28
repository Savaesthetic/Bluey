import { useDispatch } from "react-redux";
import { removeUsers } from "../../redux/slices/user";
import { AiFillCaretDown } from "react-icons/ai";
import "./UserDropdown.css";

const UserDropdown = ({ username }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    document
      .getElementById("userDropdownContent")
      .classList.remove("showUserDropdown");
    window.onclick = null;
    dispatch(removeUsers());
  };

  const handleDropdown = () => {
    document
      .getElementById("userDropdownContent")
      .classList.toggle("showUserDropdown");
  };

  window.onclick = (e) => {
    if (!e.target.matches(".userDropdownButton")) {
      let myDropdown = document.getElementById("userDropdownContent");
      if (myDropdown.classList.contains("showUserDropdown")) {
        myDropdown.classList.remove("showUserDropdown");
      }
    }
  };

  return (
    <li>
      <div className="userDropdown" onClick={handleDropdown}>
        <a href="#top" className="userDropdownButton">
          {username}
          <AiFillCaretDown />
        </a>
        <div id="userDropdownContent" className="userDropdownContent">
          <div onClick={handleLogout}>Logout</div>
        </div>
      </div>
    </li>
  );
};

export default UserDropdown;
