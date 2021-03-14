import server from "../server"

const initStore = {
    contentList: server,
    filterWindow: false,
    filterPosition: "popular",
    searchValue: ''
}

function reducer(state = initStore, action) {
    switch (action.type) {
        case 'FILTER':
            return {
                ...state,
                filterWindow: !state.filterWindow,
            }
        case 'FILTERVALUE':
            return {
                ...state,
                filterPosition: action.filterValue,
                filterWindow: !state.filterWindow,
            }
        case 'CHANGESEARCHVALUE':
            return {
                ...state,
                searchValue: action.searchValue,
            }
        default: return state
    }
}

export default reducer