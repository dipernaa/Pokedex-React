import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const PokedexItem = ({ getPokemonDetail, pokemon }) => (
  <Card
    onExpandChange={() => getPokemonDetail(pokemon.url)}
  >
    <CardHeader
      title={pokemon.name}
      actAsExpander
      showExpandableButton
    />
    <CardText expandable>
      hi
    </CardText>
  </Card>
);

export default PokedexItem;
