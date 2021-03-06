import React, { Component } from 'preact'
import { Link } from 'preact-router'
import './Header.less'

export default class Header extends Component {
  render () {
    return (
      <header className='header'>
        <h1>Preact App</h1>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/feed'>Feed</Link>
        </nav>
      </header>
    )
  }
}
