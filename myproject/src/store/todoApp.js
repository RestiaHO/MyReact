const store = {
    list: [],
    data: [],
    item: {},
    shopItem: [],
    prices: 0,
    num: 0
}

const reducer = (state = store, action) => {
    var newState = {
        ...state
    };
    switch (action.type) {
        case 'list':
            newState.list = action.value;
            return newState;
        case 'data':
            newState.data = action.value;
            return newState;
        case 'item':
            newState.item = action.value;
            return newState;
        case 'shopItem':
            newState.shopItem.push(action.value);
            return newState;
        case 'shopItemChange':
            newState.shopItem=action.value;
            return newState;
        case 'prices':
            newState.prices = action.value;
            return newState;
        case 'num':
            newState.num = action.value;
            return newState;
        default:
            return state;
    }
}

export default reducer;