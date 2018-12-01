import React, { Component } from 'react';

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <header className="App-header">
            <p>{this.props.name} React App</p>
          </header>
        );
    }
}

export default Header