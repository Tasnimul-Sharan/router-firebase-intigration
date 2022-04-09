import React from "react";

const Register = () => {
  return (
    <div>
      <h1>please register here</h1>
      <form>
        <input type="text" placeholder="Enter your name" />
        <br />
        <input type="email" name="Enter your email" id="" />
        <br />
        <input type="password" name="Enter your password" id="" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
