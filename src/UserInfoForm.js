import React from "react";
import "./UserInfoForm.css";

class UserInfoForm extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted!`);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="form-container">
        <h2>User Information</h2>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UserInfoForm;
