import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import MaterialReactTable from 'material-react-table';
const MTable = () => {

  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const columns = useMemo(
    () => [
      {
        header: 'Company Name',
        accessorKey: 'companyName', //simple accessorKey pointing to flat data
        enableClickToCopy:true
      },
      {
        header: 'Email',
        accessorKey: 'email', //simple accessorKey pointing to flat data
      },
      {
        header: 'First Name',
        accessorKey: 'firstName', //simple accessorKey pointing to flat data
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName', //simple accessorKey pointing to flat data
      },
      {
        header: 'unSubEmails',
        accessorKey: 'unSubEmails', //simple accessorKey pointing to flat data
      },
    ],
    [],
  );
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowsPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const apiURL =
    "https://5164-109-169-30-217.ngrok-free.app/api/mastersheet/getWholeMasterSheetWithPagination";
  useEffect(() => {
    axios
      .post(apiURL, {
        country: "uk",
        sector: "direct",
        pageNumber: 0,
        pageSize: 10,
        searchString: "",
      })
      .then((resp) => {
        console.log("jkasdhfsdfsdf, resp", resp);
        setData(resp?.data.MasterSheet);
        setTotalCount(resp?.data.totalCount);
      })
      .catch((error) => {
        console.log("jkasdhfsdfsdf, error", error);
      });
  }, []);

  return (
    <>
     <MaterialReactTable
      columns={columns}
      data={data}
      muiTablePaginationProps={{
        rowsPerPageOptions:[10,50,100]
      }}
      enableRowSelection
      getRowId={(row) => row.phoneNumber}
      initialState={{ showColumnFilters: true }}
      manualFiltering
      manualPagination
      manualSorting
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onPaginationChange={setPagination}
      onSortingChange={setSorting}
      rowCount={totalCount}
      state={{
        columnFilters,
        globalFilter,
        pagination,
        sorting,
      }}
    />
    </>
  );
};

export default MTable;
