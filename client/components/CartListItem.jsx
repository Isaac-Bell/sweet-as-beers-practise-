import React from 'react'
import { connect } from 'react-redux'

const CartListItem = (props) => {
  return (

    <tr>
      <td className="name">
        {props.beerprop.name}
      </td>
      <td>
        <input className="update-input" value="3"></input>
      </td>
      <td>
        <button>
          <span className="fa fa-trash fa-2x"></span>
        </button>
      </td>
    </tr>

  )
}

// const mapStateToProps = (state) => ({

// })

export default connect()(CartListItem)
