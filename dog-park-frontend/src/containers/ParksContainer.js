import React, { Component } from 'react'
import Parks from '../components/Parks'
import NewParkFormContainer from './NewParkFormContainer'
import ParkFilterContainer from './ParkFilterContainer'

export default class ParksContainer extends Component {
  constructor() {
    super()
    this.state = {
      parks: [],
      filteredParks: [],
      showAdd: false,
      showFilter: false
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

  handleShowFilter = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      showFilter: !this.state.showFilter
    })
  }

  pushPark = park => {
    fetch("http://localhost:3001/dog_parks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        dog_park: {
          ...park
        }
      })
    })
    this.setState({
      showAdd: false,
      parks: [...this.state.parks, park]
    })
  }

  filterParks = filtered => {
    if (filtered.length === 0) {
      this.setState({
        filteredParks: [{
          name: 'Sorry, there are no parks that match your criteria.', 
          id: 'I got your unique key right here',
          address: '',
          fenced: ''
        }]
      })
    } else {
      this.setState({
        ...this.state,
        filteredParks: filtered
      })
    }
  }

  render(){
    return(
      <div>
        <br />
        <button onClick={e => this.handleShowFilter(e)}>{ this.state.showFilter ? 'Hide Filter' : 'Filter' }</button>
        <br />
        { this.state.showFilter ? <ParkFilterContainer filterParks={this.filterParks} allParks={this.state.parks} /> : null }
        { this.state.parks.length === 0 ? "Loading..." : null }
        { this.state.filteredParks.length === 0 ? <Parks parks={this.state.parks} /> : <Parks parks={this.state.filteredParks} /> }
        <button onClick={e => this.handleShowAdd(e)}>{ this.state.showAdd ? 'Done' : 'Add Park' }</button>
        { this.state.showAdd ? <NewParkFormContainer pushPark={this.pushPark} /> : null }
      </div>
    )
  }
}