import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/authActions";

function Home() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home</h1>
      {isAuthenticated ? (
        <div>
          <p>You're logged in!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}

export default Home;
