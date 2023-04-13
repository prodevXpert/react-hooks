const initialState={
    page:0,
    rowsPerPage:10,
    pageSize:0,
}

const tableSettings=(state=initialState,action)=>{
    switch (action.type) {
        case "PAGE":
            return {
                ...state,
                page:action.payload,
            }
        case "ROWS_PER_PAGE":
            return {
                ...state,
                rowsPerPage:action.payload
            }
        case "PAGE_SIZE":
            return {
                ...state,
                pageSize:action.payload
            }
        default:
            return state
    }
}

export default tableSettings