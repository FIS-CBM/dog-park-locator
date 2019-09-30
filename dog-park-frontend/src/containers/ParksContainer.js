import React, { Component } from 'react'
import Park from '../components/Park'
import NewParkForm from './NewParkContainer'

export default class ParksContainer extends Component {
  constructor() {
    super()
    this.state = {
      parks: [],
      showAdd: false,
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
          <div className='col-xs-4 col-sm-2'>
            <button onClick={e => this.handleShowAdd(e)}>Add Park</button>
          </div>
        </div>
        <div className='row'>
          {this.state.showAdd ? <NewParkForm /> : <Park parks={this.state.parks} />}
        </div>
      </div>
    )
  }
}