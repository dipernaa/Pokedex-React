import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const PokedexItem = ({ getPokemonDetail, isLoading, pokemon }) => (
  <Card
    onExpandChange={(expanded) => {
      if (expanded && !isLoading) {
        console.log('hello');
        return getPokemonDetail(pokemon.url);
      }

      console.log('hi');
      return null;
    }}
  >
    <CardHeader
      title={pokemon.name}
      actAsExpander
      showExpandableButton
    />
    <CardText expandable>
      {pokemon.name}
    </CardText>
  </Card>
);

export default PokedexItem;
