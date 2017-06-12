import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Loading from '../shared/Loading';
import PokemonDetail from './PokemonDetail';
import { getPokemonDetails } from '../actions';

export class DetailContainer extends Component {

  componentWillMount() {
    const { url } = this.props.location.query;
    this.props.getPokemonDetail(url);
  }

  render() {
    const { isLoading, detailData } = this.props;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <PokemonDetail pokemon={detailData}/>
    );
  }
}

export const mapStateToProps = (state) => {
  const { details } = state;

  return {
    isLoading: details.isLoading,
    detailData: details.results
  };
};

export const mapDispatchToProps = (dispatch) => ({
  getPokemonDetail: (url) => dispatch(getPokemonDetails(url))
});

export default muiThemeable()(connect(mapStateToProps, mapDispatchToProps)(DetailContainer));
