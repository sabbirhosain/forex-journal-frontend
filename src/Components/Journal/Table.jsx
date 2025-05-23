import { useState } from "react";
import DataTable from "react-data-table-component"
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const User = () => {
  const [error, setError] = useState(null)

  const columns = [
    {
      name: "SL",
      selector: (row, index) => (index + 1),
      width: "60px"
    },
    {
      name: "Date and Time",
      selector: row => row.date_and_time,
      width: "170px"
    },
    {
      name: "Day of week",
      selector: row => row.day_of_week + ' - ' + row.time_of_day,
      width: "140px"
    },
    {
      name: "Currency Pair",
      selector: row => row.currency_name,
      width: "140px"
    },
    {
      name: "Chart Time",
      selector: row => row.chart_time,
      width: "120px"
    },
    {
      name: "Lot Size",
      selector: row => row.lot_size,
      width: "150px"
    },
    {
      name: "Buy or Sell",
      selector: row => row.buy_or_sell,
      width: "150px"
    },
    {
      name: "Risk to Reward",
      selector: row => row.risk_to_reward,
      width: "150px"
    },
    {
      name: "Trading Status",
      selector: row => row === false ? <button style={{ backgroundColor: "red", padding: "5px 20px", color: "white", borderRadius: "0px" }}>Loss</button> : <button style={{ backgroundColor: "green", padding: "5px 20px", color: "white", borderRadius: "0px" }}>Profit</button>,
      width: "150px"
    },
    {
      name: "SL/TP Amounts",
      selector: row => row.trade_close_by,
      width: "150px"
    },
    {
      name: "Trade Close By",
      selector: row => row.trade_close_by,
      width: "150px"
    },
    {
      name: "Analysis",
      selector: row => row.chart_analysis,
      width: "100px"
    },
    {
      name: "Market Session",
      selector: row => row.market_session,
      width: "150px"
    },
    {
      name: "Trading Statagy",
      selector: row => row.trading_statagy,
      width: "150px"
    },
    {
      name: "Market Trand",
      selector: row => row.market_trand,
      width: "150px"
    },
    {
      name: "Broker Name",
      selector: row => row.broker_name,
      width: "150px"
    },
    {
      name: "Broker Type",
      selector: row => row.broker_type,
      width: "150px"
    },
    {
      name: "Trading Type",
      selector: row => row.trading_type,
      width: "150px"
    },
    {
      name: "Attachment",
      selector: row => row.attachment,
      width: "150px"
    },
    {
      name: "Action",
      cell: row => <div className="d-flex align-items-center gap-2">
        <Link to='/trading-journal/view/1' className="btn btn-outline-primary rounded-0 btn-sm"><BsEyeFill /></Link>
        <Link to='/trading-journal/update/1' className="btn btn-outline-success rounded-0 btn-sm"><BiEditAlt /></Link>
        <button className="btn btn-outline-danger rounded-0 btn-sm"><BiTrash /></button>
      </div>,
      width: "200px"
    }
  ];

  const data = [
    {
      id: 1,
      date_and_time: '10-04-2025 03:15PM',
      day_of_week: 'Sunday',
      time_of_day: 'Night',
      currency_name: 'EUR/USD',
      chart_time: '5 Minute',
      lot_size: '0.01',
      buy_or_sell: 'BUY',
      chart_analysis: 'MMC',
      risk_to_reward: '1 : 5'

    },
  ]

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={data}
          pagination
          paginationServer
          // paginationComponentOptions={paginationOptions}
        />
      </>
    )
  }
}

export default User