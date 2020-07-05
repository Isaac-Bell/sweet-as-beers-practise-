import React from 'react'
import { connect } from 'react-redux'

function Checkout(props) {
    return (
        <div>
            <h1>Thankyou for your order!</h1>
            <div><h2>you purchased:</h2>
                <p>{JSON.stringify(props.order)}</p></div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        toggle: state.orders.complete,
        order: state.orders.order
    }
}

export default connect(mapStateToProps)(Checkout)