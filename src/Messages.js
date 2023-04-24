import React from "react";

function Messages() {
  return (
    <div>
      <h1>Leave a message!</h1>
      <form>
        <input type="text" name="messagebox" placeholder="Type here..." />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Messages;
