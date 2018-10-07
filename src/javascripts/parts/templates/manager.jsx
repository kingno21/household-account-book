import * as React from 'react';
import injectSheet from 'react-jss';
import {compose} from 'recompose';

const styles = {
  container: {
    height: '100%',
    width: '100%',
  },
};

class Manager extends React.Component {
  render() {
    const {classes} = this.props;
    return <div className={classes.container} />;
  }
}

export default compose(injectSheet(styles))(Manager);
