import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import Select from 'react-select';
import Table from '../Components/Journal/Table';
import { MdFormatListBulletedAdd } from "react-icons/md";
import { Link } from 'react-router-dom';

const Trading_Journal = () => {
  const [userList, setUserList] = useState()
  const [loading, setLoading] = useState(false)

  const options = [
    { value: '1', label: 'EUR/USD' },
    { value: '2', label: 'USD/JPY' },
    { value: '3', label: 'JPY/USD' },
  ]

  const handleChange = (selectedUserType) => {
    setUserList(selectedUserType);
  };

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'white', border: "1px solid #dee2e6", borderRadius: "0px"
    }),
  };


  return (
    <Layout title='Trading Journal List'>
      <section className=''>
        <div className='d-flex align-items-center justify-content-between bg-white p-3 ps-3 pe-md-5 my-2'>
          <h2 className='table_name_title'>Trading Journal List</h2>
          <Link to='/trading-journal/create' className='btn btn-outline-primary btn-sm rounded-0'><MdFormatListBulletedAdd /></Link>
        </div>

        <div className="row bg-white pt-3 px-3 pb-1">
          <div className="col-md-2 mb-2">
            <div className='w-100 mb-3 mb-md-0'>
              <input className="form-control rounded-0" type="date" />
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className='w-100 mb-3 mb-md-0'>
              <input className="form-control rounded-0" type="date" />
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className='w-100 mb-3 mb-md-0'>
              <select className="form-select rounded-0">
                <option selected>Day of the week</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className='w-100 mb-3 mb-md-0'>
              <select className="form-select rounded-0">
                <option selected>Time of Day</option>
                <option value="day">Day</option>
                <option value="night">Night</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className='w-100 mb-3 mb-md-0'>
              <Select
                options={options}
                value={userList}
                onChange={handleChange}
                isLoading={loading}
                placeholder={loading ? "Loading..." : "Currency"}
                isClearable={true}
                styles={customStyles}
              />
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className='w-100 mb-3 mb-md-0'>
              <select className="form-select rounded-0">
                <option selected>Chart Time</option>
                <option value="1m">1 Minute</option>
                <option value="5m">5 Minute</option>
                <option value="15m">15 Minute</option>
                <option value="30m">30 Minute</option>
                <option value="1h">1 Hours</option>
                <option value="2h">2 Hours</option>
                <option value="4h">4 Hours</option>
                <option value="1w">1 Week</option>
                <option value="1d">1 Day</option>
                <option value="1mn">1 Month</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className='w-100 mb-3 mb-md-0'>
              <select className="form-select rounded-0">
                <option selected>Chart Analysis</option>
                <option value="smc">SMC</option>
                <option value="mmc">MMC</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className='w-100 mb-3 mb-md-0'>
              <select className="form-select rounded-0">
                <option selected>Market Trand</option>
                <option value="up_trand">Up Trand</option>
                <option value="down_trand">Down Trand</option>
                <option value="side_wadge">Side Wadge</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className='w-100 mb-3 mb-md-0'>
              <select className="form-select rounded-0">
                <option selected>Market Session</option>
                <option value="london">London</option>
                <option value="new_york">New York</option>
                <option value="tokyo">Tokyo</option>
                <option value="sydney">Sydney</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className='w-100 mb-3 mb-md-0'>
              <select className="form-select rounded-0">
                <option selected>Account Type</option>
                <option value="real">Real</option>
                <option value="demo">Demo</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className='w-100 mb-3 mb-md-0'>
              <select className="form-select rounded-0">
                <option selected>Trading Type</option>
                <option value="1m">Scalping Trading</option>
                <option value="1h">Reversal Trading</option>
                <option value="1h">Breakout Trading</option>
                <option value="5m">News Trading</option>
                <option value="15m">Swing Trading</option>
                <option value="30m">Position Trading</option>
                <option value="1h">Intraday Trading</option>
                <option value="1h">Market Trend</option>
                <option value="2h">Other</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className='w-100 mb-3 mb-md-0'>
              <select className="form-select rounded-0">
                <option selected>Buy or Sell</option>
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className='w-100 mb-3 mb-md-0'>
              <select className="form-select rounded-0">
                <option selected>Trading Status</option>
                <option value="profit">Profit</option>
                <option value="loss">Loss</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className='w-100 mb-3 mb-md-0'>
              <select className="form-select rounded-0">
                <option selected>Trade Close By</option>
                <option value="stop_loss">Stop Loss</option>
                <option value="take_profit">Take Profit</option>
                <option value="close_manually">Close Manually</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className='w-100'>
              <input className="form-control rounded-0" type="search" placeholder="Search Hear..." />
            </div>
          </div>
        </div>

        <div className='mt-2'>
          <Table />
        </div>
      </section>
    </Layout>
  )
}

export default Trading_Journal