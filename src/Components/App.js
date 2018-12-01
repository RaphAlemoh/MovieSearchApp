import React, { Component } from 'react';
import '../App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Movie from './Movie.js';
import Search from './Search.js';
import spinner from './ajax-loader.gif';


class App extends Component {
      constructor(){
        super();
        this.state = {
          movies: [],
          loading: true,
          search: 'man',
        };
      }

      componentDidMount(){  
        this.searchMovie();
      }

      searchMovie(){
        this.setState({loading: true});
        let url =  `https://www.omdbapi.com/?s=${this.state.search}&apikey=4a3b711b`;
        fetch(url)
        .then(res => res.json())
        .then(jsonres => {
         //console.log(jsonres); 
          this.setState({
            movies: jsonres.Search || [],
            loading: false,

        })
      }).catch(error => {
            console.log(error);
            this.setState({
              loading: false,
            })
        })
      }
      //facebook dev circle Abuja

      submitSearch = (value) =>{
         this.setState({search: value}, () =>{
           this.searchMovie();
         });
         
      }

  render() {
    return (
      <div className="App">
       <Header name="Rapheal's" />
       <Search submit={this.submitSearch} />
      <div className="movie">
     {
       this.state.loading ? (<img src = {spinner} alt="" />) : (
       this.state.movies.map((movie, index) => (
         <Movie 
         key={movie.imdbID}
         name={movie.Title}
         img_path={movie.Poster}
         year={movie.Year}
         />
       )
       ))
     } 
     </div>
     <Footer />
     </div>
    );
  }
}
export default App;