// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const { title, items } = this.props;

    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <p>{title}</p>
          <ul className="Menu">
            { items && items.map((item, key) => <li key={key}>{item.title}</li>) }
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
