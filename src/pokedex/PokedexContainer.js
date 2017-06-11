import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Loading from '../shared/Loading';
import PokedexList from './PokedexList';
import { getPokemon } from '../actions';

export class PokedexContainer extends Component {

  componentWillMount() {
    this.props.getPokemon();
  }

  render() {
    const { isLoading, pokedexData } = this.props;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <PokedexList pokedex={pokedexData}/>
    );
  }
}

export const mapStateToProps = (state) => {
  const { pokedex } = state;

  return {
    isLoading: pokedex.isLoading,
    pokedexData: pokedex.results
  };
};

export const mapDispatchToProps = (dispatch) => ({
  getPokemon: () => dispatch(getPokemon())
});

export default muiThemeable()(connect(mapStateToProps, mapDispatchToProps)(PokedexContainer));
