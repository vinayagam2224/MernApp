import React, { Component } from "react";
import {Link,withRouter} from "react-router-dom";
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
        
    };
    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
    };
    handleSubmit = (event) => {
        event.preventDefault();
       
        if(this.state.confirmPassword !== this.state.password ){
            alert("Password and Confirm Password Dosen't Match");
            
        }
        else{
            this.props.history.push("/posts");
        }
        event.target.className += " was-validated";
        
            
    };
    
    render(){
        return (

        <section>
            <div className="container-fluid">
                <div className="container">
                    <div className="row justify-content-sm-center">
                        <div className="col-sm-6">
                            <div className="reg-box text-center">
                                <form onSubmit={this.handleSubmit}  className="needs-validation" noValidate>
                                    <h2 className="Merriweather reg-title">REGISTER</h2>
                                    <hr/>
                                    <div className="reg-greeting">
                                        <p className="Merriweather">Welcome to Elite Phones Beddau</p>
                                    </div>
                                    <div className="reg-ip-box">
                                        <h3 className="reg-det Merriweather">Personal Details</h3>
                                        <div className="input-group bda-input">
                                            <span><label>Full Name</label></span>
                                            <input type="text" className="form-control" value={this.state.fullName} name="fullName" placeholder="Enter your full name" onChange={this.changeHandler} required/>
                                            <div className="valid-feedback">Nice Name!</div>
                                        </div>
                                        <div className="input-group bda-input">
                                            <span><label>Username</label></span>
                                            <input type="text" className="form-control" value={this.state.userName} name="userName" placeholder="Enter a username" onChange={this.changeHandler} required/>
                                            <div className="valid-feedback">Looks good!</div>
                                        </div>

                                        <div className="input-group bda-input">
                                            <span><label>Email Address</label></span>
                                            <input type="email" className="form-control" value={this.state.email} name="email" placeholder="Enter your email address" onChange={this.changeHandler} required/>
                                            <div className="valid-feedback">Valid!</div>
                                        </div>

                                        <div className="input-group bda-input">
                                            <span><label>Password</label></span>
                                            <input type="password" className="form-control" value={this.state.password} name="password" placeholder="Enter a password" onChange={this.changeHandler} required/>
                                            
                                        </div>

                                        <div className="input-group bda-input">
                                            <span><label>Confirm Password</label></span>
                                            <input type="password" className="form-control" value={this.state.confirmPassword} name="confirmPassword" placeholder="Re-type your password" onChange={this.changeHandler} required/>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-default bda-btn reg-btn" >Register</button>
                                    <Link to="/signin">Already User?</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
  }
};

export default withRouter(Login);