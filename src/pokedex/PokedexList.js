import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import { routeNames } from '../routes';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  search: {
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

class PokedexList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filteredPokedex: props.pokedex
    };
  }

  filterPokedex = (value) => {
    if (value) {
      this.setState({
        filteredPokedex: this.props.pokedex.filter(item => item.name.indexOf(value) >= 0)
      });
    } else {
      this.setState({
        filteredPokedex: this.props.pokedex
      });
    }
  }

  render() {
    if (!this.state.filteredPokedex) {
      return null;
    }

    return (
      <div style={styles.container}>
        <TextField
          hintText="Search"
          onChange={(event, value) => this.filterPokedex(value)}
          style={styles.search}
        />
        <br/>

        <div>
          <List>
            {this.state.filteredPokedex.map((pokemon, index) => (
              <ListItem
                key={index}
                className="capitalize"
                onClick={() => browserHistory.push(`${routeNames.detail}?url=${pokemon.url}`)}
                primaryText={pokemon.name}
              />
            ))}
          </List>
        </div>
      </div>
    );
  }
}

export default PokedexList;
