import React, { Component } from 'react';

export default class DataLoader extends Component {
  state = { data: [] };

  componentDidMount() {
    fetch('https://quotes-api-bruna.herokuapp.com/quotes')
    .then(response => response.json())
    .then(data => 
      this.setState(() => {
        return { data }
      }))
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(el => (
            <li key={el.id}>{el.quote}</li>
          ))}
        </ul>
      </div>
    )
  }
}