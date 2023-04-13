const setPage = (page) => {
  return { type: "PAGE", payload: page };
};

const setRowsPerPage=(rowsPerPage)=>{
    return {
        type:"ROWS_PER_PAGE",
        payload:rowsPerPage,
    }
}

const setPageSize=(pageSize)=>{
    return {
        type:"PAGE_SIZE",
        payload:pageSize
    }
}

export default {
    setPage,
    setRowsPerPage,
    setPageSize
}