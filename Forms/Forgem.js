import React from "react";
import "./Forge.css"


export default class ForgotPassword extends React.Component {

  reset() {
      alert('Password is changed succesfully');
  }

  render() {
      return (
          <div>
          <div class="img">
          <br/><br/><br/>
          <h1>
          Reset Your Password
          </h1>
          <br/>
          <div class="form">
          <div class="d1">
          E-mail-Id: <input type="text" placeholder="someone@gmail.com" />
          <br/><br/>
          </div>
          <div class="d2">
          Password:<input type="password" placeholder="Password"/>
          <br/><br/>
          </div>
          <button onClick={this.reset.bind(this)}>Reset Password</button>
          <br/><br/>
          </div>
          </div>
      </div>
      )
  }
}