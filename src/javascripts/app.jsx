import * as React from 'react';
import ReactDOM from 'react-dom';
import injectSheet from 'react-jss';

import Item from './parts/atoms/item';

const styles = {
  container: {
    height: '100%',
    width: '100%',
  },
};

class App extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <Item />
      </div>
    );
  }
}

const CSSApp = injectSheet(styles)(App);
ReactDOM.render(<CSSApp />, document.getElementById('app'));
