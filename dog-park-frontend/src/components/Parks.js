import React, { Component } from 'react'

export default class Parks extends Component {
  render(){
    return(
      <div> 
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Hours</th>
              <th>Address</th>
              <th>Website</th>
              <th>Additional Information</th>
              <th>Fenced</th>
            </tr>
            {this.props.parks.map(park => {
              return(
                <tr key={park.id}>
                  <td>{park.name}</td>
                  <td>{park.hours}</td>
                  <td>{park.address}<br />{park.city}, {park.state} {park.zip_code}</td>
                  <td>{park.website}</td>
                  <td>{park.info}</td>
                  <td>{park.fenced ? 'Yes' : 'No'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}