import React from 'react';
import {connect} from 'react-redux';

import TopNav from './top-nav';

import './header.css';

export function Header(props) {
  return (
    <header>
      <TopNav
        onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
        onRestartGame={() => props.onRestartGame()}
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}

export default connect()(Header);