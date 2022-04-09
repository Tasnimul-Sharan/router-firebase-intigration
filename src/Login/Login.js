import React from "react";
import useFirebase from "../useFirebase/useFirebase";

const Login = () => {
  const { singhnInWithGoogle } = useFirebase();
  return (
    <div>
      <h1>i am log in</h1>
      <div style={{ margin: "20px" }}>
        <button onClick={singhnInWithGoogle}>Google sign in</button>
      </div>
      <form>
        <input type="email" name="Enter your email" id="" />
        <br />
        <input type="password" name="Enter your password" id="" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
