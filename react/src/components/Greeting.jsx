import React from "react";
import { Component } from "react";

class Greeting extends Component {
    render() {
        return (
            <>
            <h1>React + Vite</h1>
            <p>Welcome {this.props.name}</p>
            </>
        );
    }
}
export default Greeting;