import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginUserThunk,
  getUsersStatus,
  setStatus,
} from "../../redux/slices/user";

const UserLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => getUsersStatus(state));

  useEffect(() => {
    if (userState === "failed") {
      dispatch(setStatus("idle"));
      setErrMsg("User does not exist");
    } else if (userState === "succeeded") {
      dispatch(setStatus("idle"));
      // reset error message incase there was login error before
      setErrMsg("");
      navigate("/");
    }
  }, [userState, dispatch, navigate]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 4 || password.length > 12) {
      setErrMsg("Password must be between 4 to 12 characters");
      return;
    }

    const user = {
      username: username,
      password: password,
    };

    dispatch(loginUserThunk(user));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>{errMsg}</p>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={onUsernameChanged}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onPasswordChanged}
          required
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default UserLogin;
