import React, {Component} from 'react';
import { getIngredientList, getPairing } from '../helpers';

class BeerDetails extends Component{

  render() {
    const beer = this.props.location.state.beer;
    const yeast = beer.ingredients.yeast;
    const malt = beer.ingredients.malt;
    const hops = beer.ingredients.hops;
    let maltList = getIngredientList(malt);
    let hopsList = getIngredientList(hops);
    let pairingList = getPairing(beer);

    return(
      <div className="container">
        <div className="App-header">
          <span className="title">{beer.name}</span>
          <span>{beer.tagline}</span>
        </div>
        <div className="overview-container">
          <img className="image" src={beer.image_url} alt="Beer" width="62"/>
          <p className="description">{beer.description}</p>
        </div>
        <div className="overview-header">
          <span className="sub-header">Specs</span>
          <ul className="beer-ul">
            <li><strong>ABV:</strong>{' '}{beer.abv}{'%'}</li>
            <li><strong>IBU:</strong>{' '}{beer.ibu}</li>
            <li><strong>OG:</strong>{' '}{beer.target_og}</li>
            <li><strong>FG:</strong>{' '}{beer.target_fg}</li>
          </ul>

        </div>
        <div className="overview-header">
          <span className="sub-header">Ingredients</span>
          <ul className="beer-ul">
            <li><strong>For {beer.boil_volume.value} {beer.boil_volume.unit}</strong></li>
            <li><strong>Hops:</strong></li>
            {hopsList.map((hop, i) => (
              <li key={i}>
                {hop}
              </li>
            ))}
          </ul>
          <ul className="beer-ul">
            <li><strong>Malts:</strong></li>
            {maltList.map((malt, i) => (
              <li key={i}>
                {malt}{' '}
              </li>
            ))}
          </ul>
          <ul className="beer-ul">
            <li><strong>Yeast:</strong></li>
            <li> {yeast} </li>
          </ul>
        </div>
        <div className="overview-header">
          <span className="sub-header">Brewing Tips</span>
          <p>{beer.brewers_tips}</p>
        </div>

        <h3>Great when paired with:</h3>
        {pairingList.map((pairing, i) => (
          <span key={i}>
            {pairing}.{' '}
          </span>
        ))}
        <p><em>Contributor: {beer.contributed_by}</em></p>
      </div>
    )
  }
}
export default BeerDetails;
