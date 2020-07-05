const initialState = {
    order: null,
    complete: false
}

function orders (state = initialState, action) {
    if (action.type === "CHECKOUT") {
        return {
            order: action.order,
            complete: true
        }
    } else {
        return state
    }
}

export default orders