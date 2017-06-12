import React from 'react';
import Avatar from 'material-ui/Avatar';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';

const styles = {
  avatar: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  avatarHolder: {
    alignItems: 'center',
    display: 'flex',
    height: 160,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    top: 20,
    width: 160,
    zIndex: 3
  },
  card: {
    left: 0,
    margin: 20,
    position: 'absolute',
    right: 0,
    top: 170,
    zIndex: 1
  },
  infoLine: {
    paddingBottom: 5
  },
  statList: {
    margin: 0
  }
};

const PokemonDetail = ({ pokemon }) => (
  pokemon ?
    <div>
      <Paper circle style={styles.avatarHolder}>
        <Avatar size={150} src={pokemon.sprites.front_default} style={styles.avatar}/>
      </Paper>
      <Card style={styles.card}>
        <CardHeader/>
        <CardTitle className="capitalize" title={pokemon.name}/>
        <CardText>
          <div style={styles.infoLine}>
            <strong>Types:</strong>&nbsp;{pokemon.types.map(item => item.type.name).join(', ')}
          </div>
          <div style={styles.infoLine}>
            <strong>Base Experience:</strong>&nbsp;{pokemon.base_experience}
          </div>
          <div style={styles.infoLine}>
            <strong>Height:</strong>&nbsp;{pokemon.height}
          </div>
          <div style={styles.infoLine}>
            <strong>Weight:</strong>&nbsp;{pokemon.weight}
          </div>
          <div style={styles.infoLine}>
            <strong>Stats:</strong>
            <ul style={styles.statList}>
              {pokemon.stats.map((item, index) => <li key={index}>{item.stat.name}: {item.base_stat}</li>)}
            </ul>
          </div>
        </CardText>
      </Card>
    </div>
  : null
);

export default PokemonDetail;
