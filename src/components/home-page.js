import React, { Component} from 'react';
import debounce from 'lodash/debounce';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor(){
    super();
    this.state = {
      error: null,
      beerList: []
    };
  }

  componentDidMount(){
    let filter = window.sessionStorage.getItem("filter");
    if(filter !== null){
      this.fetchBeer(filter);
    }
  }

  fetchBeer = debounce((input) => {
    let filter = input.toLowerCase();
    if(filter === ''){
      this.setState({
        beerList: []
      })
      return;
    }else{
      fetch(`https://api.punkapi.com/v2/beers?beer_name=${filter}`)
        .then(results => results.json())
        .then(
          (json) => {
            this.setState({
              beerList: json
            });
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
    }
    window.sessionStorage.setItem("filter", filter);
  }, 300);

  render() {
    const {error} = this.state;

    let beerList = this.state.beerList.map((beer, i) => {
      return (
        <li key={i}>
          <Link to={{pathname: `/beerdetails/${beer.name}`, state:{beer}}}
            >
            {beer.name}
          </Link>
          <span className="tagline"> "{beer.tagline}"</span>
        </li>
      );
    });

    if(error){
      return <div>Error: {error.message}</div>;
    }else{
      return (
        <div className="container">
          <div className="App-header">
            <span className="title">Homebrew Recipes</span>
            <span>Search the Punk API recipe library</span>
          </div>
          <input id="search" placeholder="Recipe name: "
            onKeyUp={e => this.fetchBeer(e.target.value)}
            autoComplete = "off"
          />
          <br/>
          {this.state.beerList.length === 0 ? "" :
            <ul id="beers">
              {beerList}
            </ul>
          }
        </div>
      )
    }
  }
}

export default HomePage;
