import server from "../server"

const initStore = {
    contentList: server,
    filterWindow: false,
    filterPosition: "popular",
    searchValue: '',
    singUp: false,
    singIn: false,
    user: {},
    logind: 'off',
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
            return {
                ...state,
                singUp: action.singUp

            }
        case "SINGIN":
            console.log(state)
            return {
                ...state,
                singIn: action.singIn
            }
        case "LOGIN":
            console.log(state)
            return {
                ...state,
                user: action.user,
                logind: action.logind, 
            }
        case "CHANGEPASS": 
            return {
                
                ...state.user.password = action.newPass
                
            }
        default: return state
    }
}

export default reducer