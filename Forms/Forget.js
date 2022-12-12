import React from "react";
import "./Forget.css"

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {forgot: false};
    }

    login() {
        alert('Login will work here');
    }
    forgot() {
        this.setState({forgot: true})
    }

    render() {
        return (
            <div>
                {this.state.forgot === false && <div class="form">

                    <div class="a1"> 
                    Username: <input/> <br/>
                    </div>
                    <div class="a2">
                    Password: <input/><br/>
                    </div>
                    <div class="for">
                    <button onClick={this.forgot.bind(this)}>Forgot</button>
                    </div>
                   
                </div>}
                {this.state.forgot === true && <ForgotPassword/>}
                <div class="log">
                <button onClick={this.login.bind(this)}>Login</button>
                </div>
            </div>
        );
    }
}

class ForgotPassword extends React.Component {

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