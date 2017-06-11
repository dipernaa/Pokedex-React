import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { List, ListItem } from 'material-ui/List';
import Loading from '../shared/Loading';
import { getPokemon, getPokemonDetails } from '../actions';

export class PokedexContainer extends Component {

  componentWillMount() {
    this.props.getPokemon();
  }

  render() {
    const { isLoading, pokemonData } = this.props;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <List>
        {pokemonData.map((pokemon, index) => (
          <ListItem
            key={index}
            primaryText={pokemon.name}
          />
        ))}
      </List>
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
