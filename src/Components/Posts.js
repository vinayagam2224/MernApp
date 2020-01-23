import React, { Component } from "react";
import axios from "axios";
class Posts extends Component {
    constructor(props){
        super(props);
        this.state = { post:[] };
        
    };
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
                .then((response) => {
                    
                    
                })
                .catch((error) => {
                    console.log(error);
                })
    };
    render(){
        return (
        <div>{this.state.post}</div>
        );
    }
}

export default Posts;