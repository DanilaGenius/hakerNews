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

export default filterActive







