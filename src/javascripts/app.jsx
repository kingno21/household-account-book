import ReactDOM from 'react-dom';
import * as React from 'react';
import injectSheet from 'react-jss';

import Manager from './parts/templates/manager';

class App extends React.Component {
  render() {
    return <Manager />;
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
