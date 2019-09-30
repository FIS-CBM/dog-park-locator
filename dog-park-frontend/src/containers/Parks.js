import React, { Component } from 'react'

export default class Parks extends Component {
  constructor() {
    super()
    this.state = {
      parks: [],
      showAdd: false,
      new: {
        name: '',
        street: '',
        city: '',
        state: '',
        zip_code: '',
        hours: '',
        info: '',
        website: '',
        fenced: false
      }
    }

  }

  componentDidMount(){
    this.fetchParks()
  }

  fetchParks = () => {
    fetch(`http://localhost:3001/dog_parks`)
    .then(r => r.json())
    .then(parks => this.setState({
      ...this.state,
      parks: parks
    }))
  }

  handleShowAdd = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      showAdd : !this.state.showAdd
    })
  }

  handleFieldChange = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      new: {
        ...this.state.new,
        [e.target.id]: e.target.value
      }
    })
  }

  handleFenceChange = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      new: {
        ...this.state.new,
        fenced: !this.state.new.fenced
      }
    })

  }

  render(){
    return(
      <div className='parks-container'>
        <div className='row'>
          <div className='col-xs-4 col-sm-2'>
            <button onClick={e => this.handleShowAdd(e)}>Add Park</button>
          </div>
        </div>
      {this.state.showAdd ? 
        <div className='col-med-8 add-park-form'>
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

        </div> :
        <div className='row'>
          <div className='col-md-8'>
            <table>
              <tbody>
              <tr>
                <th>Name</th>
                <th>Hours</th>
                <th>Address</th>
                <th>Fenced</th>
              </tr>
                {this.state.parks.map(park => {
                  return(
                    <tr key={park.id}>
                      <td>{park.name}</td>
                      <td>{park.hours}</td>
                      <td>{park.address}<br />{park.city}, {park.state}</td>
                      <td>{park.fenced ? 'Yes' : 'No'}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>}
      </div>
    )
  }
}