import React, {PropTypes} from 'react';
import {Component} from 'relax-framework';

import styles from './actions.less';
import Displays from './displays';
import Statuses from './statuses';

export default class Actions extends Component {
  render () {
    return (
      <div className={styles.root}>
        <Displays />
        <Statuses />
      </div>
    );
  }
}
