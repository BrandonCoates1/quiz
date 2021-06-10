import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Account = ({ user, setUser }) => {
  const [redirect, setRedirect] = useState(false)

  const deleteAccount = () => {
    //does nothing yet hahahaha
    console.log("jabaited");
  } 

  if (!user) {
    return (
      <Redirect to="/login"/>
    )
  }

  if (redirect) return <Redirect to="/quiz"/>

  return (
    <div className="account">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button type="button" onClick={() => setRedirect(true)}>Go to quiz</button>
      <button type="button" onClick={() => setUser("")}>Logout</button>
      <button type="button" onClick={deleteAccount}>Delete Account</button>
    </div>
  )
}

export default Account;