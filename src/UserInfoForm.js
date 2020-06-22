import React from "react";

const UserInfoForm = () => {

  const allFieldsValid = (...args) => {
    // loop through all arguments that were passed in
    // if any are falsy, return false
    // otherwise return true
    for(let i = 0; i < args.length; i++) {
      if(!args[i]) {
        return false
      }
    }
    return true
  };

  const formTag = React.createRef()

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let {firstname, lastname, title, notARobot} = event.target

    // for input & select fields use .value
    // for checkbox use .checked
    if(allFieldsValid(firstname.value, lastname.value, title.value, notARobot.checked)) {
      alert("Form submitted successfully!")
    }
    else {
      alert("Please fill out the form completely")
    }

  }

  return (
    <form onSubmit={handleFormSubmit} ref={formTag}>
      <h2>User Information</h2>
      
      <div className="form-group">
        <input id="not-robot" type="checkbox" name="notARobot"/>
        <label htmlFor="not-robot">I am not a robot</label>
      </div>

      <div className="form-group">
        <select name="title">
          <option value=''></option>
          <option value='mr'>Mr.</option>
          <option value='ms'>Ms.</option>
          <option value='mrs'>Mrs.</option>
          <option value='mx'>Mx.</option>
          <option value='dr'>Dr.</option>
        </select>
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="First Name"
          name="firstname"
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default UserInfoForm
