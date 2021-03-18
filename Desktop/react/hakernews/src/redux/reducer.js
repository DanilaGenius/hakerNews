import server from "../server"

const initStore = {
    contentList: server,
    filterWindow: false,
    filterPosition: "popular",
    searchValue: '',
    singUp: false,
    singIn: false,
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
        case "SINGUP":
            console.log('up', action.singUp)
            return {
                ...state,
                singUp: action.singUp

            }
        case "SINGIN":
            console.log("in", action.singIn)
            return {
                ...state,
                singIn: action.singIn
            }
        default: return state
    }
}

export default reducer