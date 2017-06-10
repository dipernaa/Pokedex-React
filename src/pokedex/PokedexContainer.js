import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import PokedexItem from './PokedexItem';
import Loading from '../shared/Loading';
import { getPokemon, getPokemonDetails } from '../actions';

export class PokedexContainer extends Component {

  componentWillMount() {
    this.props.getPokemon();
  }

  render() {
    const { getPokemonDetail, isLoading, pokemonData } = this.props;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div>
        {pokemonData.map((pokemon, index) => (
          <PokedexItem
            key={index}
            isLoading={isLoading}
            getPokemonDetail={getPokemonDetail}
            pokemon={pokemon}
          />
        ))}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  const { pokemon } = state;

  return {
    isLoading: pokemon.isLoading,
    pokemonData: pokemon.results
  };
};

export const mapDispatchToProps = (dispatch) => ({
  getPokemon: () => dispatch(getPokemon()),
  getPokemonDetail: (url) => dispatch(getPokemonDetails(url))
});

export default muiThemeable()(connect(mapStateToProps, mapDispatchToProps)(PokedexContainer));
