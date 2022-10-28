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
      // reset error message incase there was registration error before
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

    const user = {
      username: username,
      password: password,
    };

    dispatch(loginUserThunk(user));
  };

  return (
    <div>
      <form>
        <p>{errMsg}</p>
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
