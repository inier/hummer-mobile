import React, { Component } from 'react';
import styles from './index.css';
import PropTypes from 'prop-types';
/**
 * 电话号码输入组件
 * 可以被其他应用复用，所以放在Base-Compoents下
 */
class InputMobile extends Component {
  constructor(props) {
    super(props);
    this.state = { showClose: props.mobile ? true : false };
  }

  render() {
    const { className, disabled, defaultValue } = this.props;
    let { mobile } = this.props;
    mobile = mobile ? mobile : '';
    return (
      <div className={`${className || ''} ${styles.inputItem}`}>
        <span>手机号</span>
        <input
          placeholder="手机号码"
          defaultValue={defaultValue}
          disabled={disabled}
          value={mobile}
          maxLength={11}
          ref={this.inputRef}
          onChange={this.handleChange}
        />
        {this.state.showClose && <div onClick={this.handleClick} />}
      </div>
    );
  }
  handleChange = e => {
    if (e.target.value) {
      this.setState({ showClose: true });
    } else {
      this.setState({ showClose: false });
    }
    this.props.onChange(e);
  };
  handleClick = e => {
    this.input.value = '';
    //触发Change事件
    this.handleChange({ target: this.input });
  };
  inputRef = input => {
    this.input = input;
  };
}
InputMobile.propTypes = {
  disabled: PropTypes.bool,
  mobile: PropTypes.string,
  onChange: PropTypes.func,
  /**
   * 样式
   */
  className: PropTypes.string
};
export default InputMobile;
