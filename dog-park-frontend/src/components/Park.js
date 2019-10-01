import React, { Component } from 'react'

export default class Park extends Component {
  render(){
    return(
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
              {this.props.parks.map(park => {
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
      </div>
    )
  }
}