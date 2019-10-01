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
      fenced: 'false',
      info: '',
      website: ''
    }
  }

  handleFieldChange = e => {
    e.preventDefault()
    let value
    if (e.target.type === 'checkbox') {
      this.state.fenced === 'false' ? value = 'true' : value = 'false'
    }
    this.setState({
      ...this.state,
      [e.target.name]: value || e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.pushPark()
  }

  pushPark = () => {
    fetch('http://localhost:3001/dog_parks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dog_park: {
          ...this.state
        }
      })
    })
  }

  render(){
    return( 
      <form onSubmit={e => this.handleSubmit(e)}>
        <p>Name: <input name='name' value={this.state.name} onChange={e => this.handleFieldChange(e)} /></p>
        <p>Street: <input name='address' value={this.state.address} onChange={e => this.handleFieldChange(e)} /></p>
        <p>City: <input name='city' value={this.state.city} onChange={e => this.handleFieldChange(e)} /></p>
        <p>State: <input name='state' value={this.state.state} onChange={e => this.handleFieldChange(e)} /></p>
        <p>Zip Code: <input name='zip_code' value={this.state.zip_code} onChange={e => this.handleFieldChange(e)} /></p>
        <p>Hours: <input name='hours' value={this.state.hours} onChange={e => this.handleFieldChange(e)} /></p>
        <p>Info: <input name='info' value={this.state.info} onChange={e => this.handleFieldChange(e)} /></p>
        <p>Website: <input name='website' value={this.state.website} onChange={e => this.handleFieldChange(e)} /></p>
        <p>Fenced: <select name='fenced' value={this.state.fenced} onChange={e => this.handleFieldChange(e)}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select></p>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}