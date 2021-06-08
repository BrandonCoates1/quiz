import React from "react";
import { Redirect } from "react-router-dom";

const Account = ({ user, setUser }) => {

  if (!user) {
    return (
      <Redirect to="/login"/>
    )
  }

  return (
    <div className="account">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button type="button" onClick={() => setUser("")}>Logout</button>
    </div>
  )
}

export default Account;