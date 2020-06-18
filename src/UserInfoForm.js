import React, { useState } from "react";

const UserInfoForm = () => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted!`)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>User Information</h2>
      
      <button type="submit">Submit</button>
    </form>
  )
}

export default UserInfoForm
