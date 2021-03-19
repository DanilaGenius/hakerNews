const filterActive = () => {
    return {
        type: 'FILTER',
    }
}

export const filterValueChange = (value) => {
    return {
        type: 'FILTERVALUE',
        filterValue: value,
    }
}

export const search = (value) => {
    return {
        type: 'CHANGESEARCHVALUE',
        searchValue: value,

    }
}

export const singUp = (value) => {
    return {
        type: 'SINGUP',
        singUp: value,
    }
}

export const singIn = (value) => {
    return {
        type: 'SINGIN',
        singIn: value,
    }
}

export const accLogin = (user = {}) => {
    return {
        type: 'LOGIN',
        user: user,
        logind: (user.id >= 1) ? 'on' : 'off'
    }
}


export default filterActive







