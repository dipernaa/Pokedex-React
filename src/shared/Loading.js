import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

require('../styles/Loading.scss');

const Loading = () => (
  <div className="loading-wrapper">
    <LinearProgress mode="indeterminate" />
  </div>
);

export default Loading;
