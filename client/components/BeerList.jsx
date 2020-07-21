import React from 'react'
import BeerListItem from './BeerListItem'
import request from 'superagent'

let beer = ''

function addaBeer (name) {
  console.log(name)
  request.post('/')
    .send({
      name: name
    })
    .then(console.log('hi'))
}


function returnBeer () {
request.get('/')
.then(res => console.log(res))
}


class BeerList extends React.Component {
  render () {
    return (
      <>
        <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>
        <p>Add a new beer to our list of beverages:</p>
        <input type="text" onChange={(event) => (beer = event.target.value)}
        />
        <button onClick={() => addaBeer(beer)}>Enter it now</button>
        <button onClick={() => returnBeer()}>Show API beers</button>

        {this.props.beers.map(beerItem => {
          return (
            <div className='beer' key={beerItem.id}>
              <BeerListItem beer={beerItem}/>
            </div>
          )
        })}
     </>
    )
  }
}
d'
swgjpwegedja

export default BeerList
