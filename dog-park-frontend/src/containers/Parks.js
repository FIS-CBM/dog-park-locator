import React, { Component } from 'react'

export default class Parks extends Component {
  constructor() {
    super()
    this.state = {
      parks: [],
      showAdd: false
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

  render(){
    return(
      <div className='parks-container'>
        <div className='row'>
          <div className='col-sm-2'>
            <button onClick={e => this.handleShowAdd(e)}>Add Park</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <table>
              <tr>
                <th>Name</th>
                <th>Hours</th>
                <th>Address</th>
                <th>Fenced</th>
              </tr>
                {this.state.parks.map(park => {
                  return(
                    <tr>
                      <td>{park.name}</td>
                      <td>{park.hours}</td>
                      <td>{park.address}<br />{park.city}, {park.state}</td>
                      <td>{park.fenced ? 'Yes' : 'No'}</td>
                    </tr>
                  )
                })}
            </table>
          </div>
        </div>
      </div>
    )
  }
}