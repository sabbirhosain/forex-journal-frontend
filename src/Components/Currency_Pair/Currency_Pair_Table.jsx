import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCurrencyPairContextProvider } from "../../Context/Currency_Pair_Context";

const Currency_Pair_Table = () => {
  const paginationOptions = {
    rowsPerPageText: 'Rows Per Page:',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All'
  };

  const { currencyList, volatilityFilter, liquidityFilter, sessionFilter, searchFilter, customErrorMessage, isLoading, CurrencyPairFetch, rowLimit, setRowLimit, deleteItem } = useCurrencyPairContextProvider();
  useEffect(() => { CurrencyPairFetch(1) }, [volatilityFilter, liquidityFilter, sessionFilter, searchFilter, rowLimit]);

  // data table page change
  const onPageChange = (page) => {
    CurrencyPairFetch(page);
  };

  const onChangeRowsPerPage = (rowParPage) => {
    setRowLimit(rowParPage)
  };



  const columns = [
    {
      name: "SL",
      selector: (row, index) => (index + 1),
      width: "60px"
    },
    {
      name: "Currency Pair",
      selector: row => row.currency_pair,
      width: "170px"
    },
    {
      name: "Currencies Involved",
      selector: row => row.currencies_involved,
      width: "200px"
    },
    {
      name: "Liquidity",
      selector: row => row.liquidity,
      width: "140px"
    },
    {
      name: "Volatility",
      selector: row => row.volatility,
      width: "120px"
    },
    {
      name: "Open & Close Day",
      selector: row => row.open_and_close_day,
      width: "180px"
    },
    {
      name: "Open & Close Time",
      selector: row => row.open_and_close_time,
      width: "200px"
    },
    {
      name: "Session Name",
      cell: row => (
        <div className="d-flex flex-wrap gap-1">
          {row.session_and_time?.map((session, index) => {
            const sessionKey = session.session_name.toLowerCase();
            const colorMap = {
              london: "#e74c3c",     // red
              new_york: "#2ecc71",   // green
              sydney: "#3498db",     // blue
              tokyo: "#e67e22"       // orange
            };
            const badgeColor = colorMap[sessionKey] || "#7f8c8d";
            const displayName = session.session_name.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

            return (
              <span
                key={index}
                style={{
                  backgroundColor: badgeColor,
                  color: "#fff",
                  padding: "3px 8px",
                  fontSize: "12px",
                  display: "inline-block"
                }}
              >
                {displayName}
              </span>
            );
          })}
        </div>
      ),
      width: "180px"
    },
    {
      name: "Start To End Time-BDT",
      cell: row => (
        <div className="d-flex flex-wrap gap-1">
          {row.session_and_time?.map((session, index) => {
            const sessionKey = session.session_name.toLowerCase();
            const colorMap = {
              london: "#e74c3c",
              new_york: "#2ecc71",
              sydney: "#3498db",
              tokyo: "#e67e22"
            };
            const badgeColor = colorMap[sessionKey] || "#7f8c8d";
            return (
              <span key={index} style={{
                backgroundColor: badgeColor,
                color: "#fff",
                padding: "4px 8px",
                fontSize: "12px",
                display: "inline-block"
              }}>
                {session.start_to_end_time_bdt}
              </span>
            );
          })}
        </div>
      ),
      width: "300px"
    },
    {
      name: "Start To End Time-GMT",
      cell: row => (
        <div className="d-flex flex-wrap gap-1">
          {row.session_and_time?.map((session, index) => {
            const sessionKey = session.session_name.toLowerCase();
            const colorMap = {
              london: "#e74c3c",
              new_york: "#2ecc71",
              sydney: "#3498db",
              tokyo: "#e67e22"
            };
            const badgeColor = colorMap[sessionKey] || "#7f8c8d";
            return (
              <span key={index} style={{
                backgroundColor: badgeColor,
                color: "#fff",
                padding: "3px 8px",
                fontSize: "12px",
                display: "inline-block"
              }}>
                {session.start_to_end_time_gmt}
              </span>
            );
          })}
        </div>
      ),
      width: "250px"
    },
    {
      name: "Best Session To Trade",
      selector: row => row.best_session_to_trade,
      width: "300px"
    },
    {
      name: "Notes",
      selector: row => row.notes,
      width: "150px"
    },
    {
      name: "Action",
      cell: row => <div className="d-flex align-items-center gap-2">
        <Link to={`/currency-pairs/view/${row._id}`} className="btn btn-outline-primary rounded-0 btn-sm"><BsEyeFill /></Link>
        <Link to={`/currency-pairs/update/${row._id}`} className="btn btn-outline-success rounded-0 btn-sm"><BiEditAlt /></Link>
        <button onClick={() => deleteItem(row._id)} className="btn btn-outline-danger rounded-0 btn-sm"><BiTrash /></button>
      </div>,
      width: "200px"
    }
  ];


  if (customErrorMessage) {
    return <div className="text-center py-4 fst-italic">{customErrorMessage.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={currencyList.payload}
          pagination
          paginationServer
          paginationComponentOptions={paginationOptions}
          progressPending={isLoading}
          paginationTotalRows={currencyList?.pagination?.total_data}
          onChangePage={onPageChange}
          onChangeRowsPerPage={onChangeRowsPerPage}
        />
      </>
    )
  }
}

export default Currency_Pair_Table