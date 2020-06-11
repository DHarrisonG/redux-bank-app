const reducer = (state, action) => {
    switch (action.type) {
        case "WITHDRAW":
            console.log(action.payload)
            return {
                ...state,
                totalAmount: state.totalAmount - action.payload 
            }

        default: 
        return state
    }
}

export default reducer;