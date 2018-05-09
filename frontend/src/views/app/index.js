import React, { Component } from 'react';
import autobind from 'autobind';
import { hot } from 'react-hot-loader'
import logo from './assets/logo.svg';
import styles from './styles.css';

@autobind
@hot(module)
class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/components/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
