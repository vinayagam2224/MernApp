import React, { Component } from "react";
import {Link} from "react-router-dom";
class Signin extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName : "",
            password : "",
        }
    }
    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
    };
    handleSubmit = (event) => {
        event.preventDefault();
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
                                    <h2 className="Merriweather reg-title">Signin</h2>
                                    <hr/>
                                    <div className="reg-greeting">
                                        <p className="Merriweather">Welcome to Elite Phones Beddau</p>
                                    </div>
                                    <div className="reg-ip-box">
                                        <div className="input-group bda-input">
                                            <span><label>Username</label></span>
                                            <input type="text" className="form-control" value={this.state.userName} name="userName" placeholder="Enter a username" onChange={this.changeHandler} required/>
                                            <div className="valid-feedback">Looks good!</div>
                                        </div>
                                        <div className="input-group bda-input">
                                            <span><label>Password</label></span>
                                            <input type="password" className="form-control" value={this.state.password} name="password" placeholder="Enter a password" onChange={this.changeHandler} required/>
                                            
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-default bda-btn reg-btn" >NEXT</button>
                                    <Link to="/">New User?</Link>
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

export default Signin;