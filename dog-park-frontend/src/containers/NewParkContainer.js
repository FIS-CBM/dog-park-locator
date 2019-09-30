import React, { Component } from 'react'

export default class NewParkContainer extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip_code: '',
      hours: '',
      fenced: false,
      info: '',
      website: ''
    }
  }

  handleFieldChange = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value
    })
  }

  render(){
    return( 
      <form>
        <p>Name: <input id='name' onChange={e => this.handleFieldChange(e)} /></p>
        <p>Street: <input id='address' onChange={e => this.handleFieldChange(e)} /></p>
        <p>City: <input id='city' onChange={e => this.handleFieldChange(e)} /></p>
        <p>State: <input id='state' onChange={e => this.handleFieldChange(e)} /></p>
        <p>Zip Code: <input id='zip_code' onChange={e => this.handleFieldChange(e)} /></p>
        <p>Hours: <input id='hours' onChange={e => this.handleFieldChange(e)} /></p>
        <p>Info: <input id='info' onChange={e => this.handleFieldChange(e)} /></p>
        <p>Website: <input id='website' onChange={e => this.handleFieldChange(e)} /></p>
        <p>Fenced: <input type='checkbox' id='fenced' onClick={e => this.handleFieldChange(e)} /></p>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}