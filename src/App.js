import React, { Component } from 'react';
import {
  Card
} from 'reactstrap'
import './App.css';

class App extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    console.log("ComponentDidmount Sedang Berjalan")
    const urlFetch = fetch("https://jsonplaceholder.typicode.com/users")
    console.log("Fetch data sedang berjalan")
    urlFetch.then(res => {
      if (res.status === 200)
        return res.json()
    }).then(resJson => {
      console.log("Mengatur State.data")
      this.setState({
        data: resJson
      })
    })
  }
  render() {
    console.log(`Render lifecycle: ${JSON.stringify(this.state)}`)
    return (
      <div className="App">
        {this.state.data.map((datum, index) => {
          return (
            <Card key={datum.id}>
              {datum.website}
            </Card>
          )
        })}
      </div>
    )
  }
}

export default App;
