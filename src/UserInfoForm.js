import React, { useState } from "react";

const UserInfoForm = () => {

  const [notARobot, setRobot] = useState(false)
  const [title, setTitle] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const allFieldsValid = () => {
    return (
      notARobot &&
      title &&
      firstName &&
      lastName
    );
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(allFieldsValid()) {
      alert(`Form submitted! \n ${notARobot} \n ${title} \n ${firstName} \n ${lastName}`);
    }
    else {
      alert("Please fill out the form completely")
    }
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }
  
  const handleCheckboxChange = (e) => {
    setRobot(e.target.checked)
  }

  const handleSelectChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>User Information</h2>
      
      <div className="form-group">
        <input id="not-robot" type="checkbox" checked={notARobot} onChange={handleCheckboxChange}/>
        <label htmlFor="not-robot">I am not a robot</label>
      </div>

      <div className="form-group">
        <select value={title} onChange={handleSelectChange}>
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
          value={firstName}
          placeholder="First Name"
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={handleLastNameChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default UserInfoForm
