import bind from 'decorators/bind';
import cx from 'classnames';
import Component from 'components/component';
import Tooltip from 'components/tooltip';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.less';

export default class CssPositionButton extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    active: PropTypes.bool
  };

  @bind
  onClick () {
    const {onChange, value} = this.props;
    onChange(value);
  }

  render () {
    const {label, active} = this.props;

    return (
      <Tooltip label={label} className={cx(styles.root, active && styles.active)}>
        <div onClick={this.onClick}>
          {this.props.children}
        </div>
      </Tooltip>
    );
  }
}
