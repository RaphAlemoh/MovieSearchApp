import React, { Component } from 'react';

class Search extends Component{
    constructor(){
        super()
        this.state = {
            value: 'abc',
        }
    }

    setValue  = event => {
        this.setState({value: event.target.value});
        this.props.submit(event.target.value);
    }

    submitForm = event => {
            this.props.submit(this.state.value);
            event.preventDefault();
    };
    render(){
    return(
        <div>
        <form className="search-form" onSubmit={this.submitForm}>
        <input className="search-input" type="text" value={this.state.value} 
        onChange={this.setValue} 
        name = ""
        placeholder="search for a movie" />
        <button className="search-button" >Search</button>
        </form>
        </div>
    );
}
}
export default Search