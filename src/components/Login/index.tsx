import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLogout } from "../../redux/slices/Users";

function Login() {
  const [newUsername, setNewUsername] = useState<string>("");

  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.usersData.user.username);

  return (
    <div>
      <h1>This is the Login page</h1>
      {!!username && <h2>Hi {username}</h2>}
      <input
        value={newUsername}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewUsername(e.target.value)
        }
      />
      <button
        onClick={() => {
          dispatch(
            userLogin({
              username: newUsername,
            })
          );
        }}
      >
        Submit Login
      </button>

      <button onClick={() => dispatch(userLogout())}>Logout</button>
    </div>
  );
}

export default Login;
