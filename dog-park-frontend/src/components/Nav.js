import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  constructor(){
    super()
    this.state = {
      auth: false
    }
  }

  render(){
    return(
      <div className='row nav'> {/* currently set up as a header. can easily be changed. reach out to @someotherkyle if you have issues not going to work too hard on formatting this until a decision is made*/}
        <NavLink to='/' activeClassName='active' className='col-xs-12 col-sm-3'>{this.state.auth ? 'Log Out' : 'Log In'}</NavLink>
        <NavLink to='/parks' activeClassName='active' className='col-xs-12 col-sm-3'>Parks</NavLink>
      </div>
    )
  }
}