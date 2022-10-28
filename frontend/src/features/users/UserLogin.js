import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserThunk } from "../../redux/slices/user";

const UserLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    dispatch(loginUserThunk(user));
    navigate("/");
  };

  return (
    <div>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={onUsernameChanged}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onPasswordChanged}
        />
        <button type="button" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
