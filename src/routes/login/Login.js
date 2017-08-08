/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/*eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';

import history from '../../history';

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      currentName: '',
      clicked: false,
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  setName = (e) => {
    // e.target.value is the text from our input
    this.setState({currentName: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    // this.props.selectUser(this.state.currentName).then(
    history.push('/welcome');
    // );
  }

  render() {
    console.log('login state',this.state);
    console.log('login props',this.props)
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            {this.state.title} {this.state.currentName}
          </h1>
          <p className={s.lead}>Log in with your Name</p>
          <form onSubmit={this.onSubmit}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="name">
                Name
              </label>
              <input
                onChange={this.setName}
                value={this.state.currentName}
                className={s.input}
                id="name"
                type="text"
                name="name"
                autoFocus // eslint-disable-line jsx-a11y/no-autofocus
              />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="password">
                Password:
              </label>
              <input className={s.input} id="password" type="password" name="password"/>
            </div>
            <div className={s.formGroup}>
              <button className={s.button} onClick={() => {
                this.setState({clicked: true});
              }}>
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Login);

/*eslint-enable */
