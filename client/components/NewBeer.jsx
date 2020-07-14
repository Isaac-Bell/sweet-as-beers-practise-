import React from 'react'
import request from 'superagent'

const url = 'http://localhost:3000/newBeer'

export NewBeer extends React.Component {

  state = {
    name: ''
  }

  componentDidMount () {
    request.get(url)
      .then(res => {
        const {name} = res.body
        this.setState({name})
      })
  }


  render() {
    const {name} = this.state
    return (
      <>
        <h2>New Beer name</h2>
        <p>{name}</p>
      </>
    )
  }
}

export default NewBeer
