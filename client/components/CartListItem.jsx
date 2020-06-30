import React from 'react'
import { connect } from 'react-redux'
import { removeBeerFromCart } from '../actions/index'

function CarListItem (props) {

<tr>
    <td>HBIB Ginger Fusion</td>
    <td><input class="update-input" value="3"></td>
        <td><button><span class="fa fa-trash fa-2x"></span></button></td>
</tr>

}