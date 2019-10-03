import React, { Component } from 'react'

export default class ParkFilterContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      allParks: [],
      selection: 'name'
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      allParks: this.props.allParks
    })
  }

  handleSelection = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      selection: e.target.value
    })
  }

  handleFilterChange = e => {
    e.preventDefault()
    if (this.state.allParks.length > 0) {
      let filtered = this.state.allParks.filter(park => {
        return park[this.state.selection].toLowerCase().includes(e.target.value.toLowerCase())
      })
      this.props.filterParks(filtered)
    }
  }

  render(){
    return(
      <div>
        <select onChange={this.handleSelection}>
          <option value='name'>Name</option>
          <option value='address'>Address</option>
          <option value='city'>City</option>
          <option value='state'>State</option>
          <option value='zip_code'>Zip Code</option>
          <option value='fenced'>Fenced</option>
        </select>
        <input value={this.state.filter} onChange={this.handleFilterChange} />
      </div>
    )
  }
}