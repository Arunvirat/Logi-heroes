'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  getDate()
  {
   return new Date().toLocaleDateString();
  }
  render() {
    return (
      <div className="app-container">
        <header>
        <div className="datediv">
        <label>{this.getDate()}</label>
        </div>
        <div>
          <Link to="/">
            <label className="logo logoheading">Logi Heroes</label>
          </Link>
          </div>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
           Know your clan's positions and keep up the momentum <strong>I love the winning, I can take the losing, but most of all I Love to play. </strong> and <strong>Participate to win gifts</strong>.
          </p>

          <p>
            Do you want to know more about Logitech Olympics? <strong>Checkout <a href="https://nodejsdesignpatterns.com">LARC</a></strong>.
          </p>

          <p>
            Built with <strong>❤</strong>︎ and <strong>code</strong> by <a href="http://loige.co" target="_blank">loige</a>.
            Contribute on <a href="https://github.com/lmammino/judo-heroes">GitHub</a> or
            read the tutorial on <a href="https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app">Scotch.io</a>
          </p>
        </footer>
      </div>
    );
  }
}
