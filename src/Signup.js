import React from "react";

function Signup() {
  return (
    <div>
      <h1>Signup!</h1>
      <form>
        <div>
          <input type="text" name="email" placeholder="Email Address?" />
        </div>
        <div>
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Signup;
