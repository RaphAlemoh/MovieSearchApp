import React, { Component } from 'react';

class Movie extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (

                    <div>
                    <span>{this.props.key}</span>
                     <h3>{this.props.name}</h3>
                     <img src={this.props.img_path} height="250" width="250" alt=""/>
                         <span>{this.props.year}</span>
                         <p className="desc">{this.props.desc}
                         </p>
                     </div>
        );
    }
}

export default Movie