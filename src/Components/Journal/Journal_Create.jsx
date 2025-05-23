import React, { useEffect } from 'react'
import Layout from '../../Layout/Layout'
import { useState } from 'react';
import { toast } from 'react-toastify';
import Select from 'react-select';
import axios from 'axios';
import { journal_create } from '../../Api_Base_Url';
import { Link, useNavigate } from 'react-router-dom';
import { useCurrencyPairContextProvider } from '../../Context/Currency_Pair_Context';

const Journal_Create = () => {
  const { currencyOptionSelect, isLoading, CurrencyPairFetch, optionSearch, optionSelect, optionSelectValue, searchFilter } = useCurrencyPairContextProvider();
  useEffect(() => { CurrencyPairFetch(1) }, [searchFilter]);

  const navigate = useNavigate();
  const [date_and_time, setDate_and_time] = useState('')
  const [day_of_the_week, setDay_of_the_week] = useState('')
  const [time_of_day, setTime_of_day] = useState('')
  const [chart_time, setChart_time] = useState('')
  const [chart_analysis, setChart_analysis] = useState('')
  const [trading_statagy, setTrading_statagy] = useState('')
  const [market_trand, setMarket_trand] = useState('')
  const [market_session, setMarket_session] = useState('')
  const [broker_name, setBroker_name] = useState('')
  const [broker_type, setBroker_type] = useState('')
  const [trading_type, setTrading_type] = useState('')
  const [lot_size, setLot_size] = useState('')
  const [buy_or_sell, setBuy_or_sell] = useState('')
  const [risk_to_reward, setRisk_to_reward] = useState('')
  const [sl_tp_amounts, setSl_tp_amounts] = useState('')
  const [trading_status, setTrading_status] = useState('')
  const [trade_close_by, setTrade_close_by] = useState('')
  const [attachment, setAttachment] = useState('')
  const [note, setNote] = useState('')
  const [customErrorMessage, setCustomErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('date_and_time', date_and_time);
      formData.append('day_of_the_week', day_of_the_week);
      formData.append('time_of_day', time_of_day);
      formData.append('forex_pair_id', optionSelectValue?.value);
      formData.append('chart_time', chart_time);
      formData.append('chart_analysis', chart_analysis);
      formData.append('trading_statagy', trading_statagy);
      formData.append('market_trand', market_trand);
      formData.append('market_session', market_session);
      formData.append('broker_name', broker_name);
      formData.append('broker_account_type', broker_type);
      formData.append('trading_type', trading_type);
      formData.append('lot_size', lot_size);
      formData.append('buy_or_sell', buy_or_sell);
      formData.append('risk_to_rewards', risk_to_reward);
      formData.append('sl_or_tp_amounts', sl_tp_amounts);
      formData.append('trading_status', trading_status);
      formData.append('trade_close_by', trade_close_by);
      formData.append('notes', note);

      // if (attachment) { formData.append('attachment', attachment) }
      const response = await axios.post(journal_create, formData);

      if (response && response.data) {
        if (response.data.success) {
          navigate("/trading-journal");
          toast.success(response.data.message)
        } else {
          console.log(response.data);
          alert(response.data.message);
          setCustomErrorMessage(response.data.message || 'Something went wrong');
        }
      }

    } catch (error) {
      console.log(error);
      alert(error.message || 'Internal Server Error')
      setCustomErrorMessage(error.message || 'Internal Server Error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <section className='container my-5'>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form onSubmit={handleSubmit} encType="multipart/form-data" className='shadow-sm bg-white px-5 pt-3 pb-4'>
              <h4 className='text-center py-4'>Create Trading Journal</h4>
              <div className="row border-top border-dark pt-4">
                <div className="col-md-4 mb-3">
                  <label className='form-label'>Date and Time</label>
                  <input type="datetime-local" onChange={(event) => setDate_and_time(event.target.value)} className='form-control rounded-0' required />
                </div>
                <div className="col-md-4 mb-3">
                  <label className='form-label'>Day of the week</label>
                  <select onChange={(event) => setDay_of_the_week(event.target.value)} className="form-select rounded-0">
                    <option value=''>Select Day</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <label className='form-label'>Time of Day</label>
                  <select onChange={(event) => setTime_of_day(event.target.value)} className="form-select rounded-0">
                    <option value=''>Select Day</option>
                    <option value="day">Day</option>
                    <option value="night">Night</option>
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Currency Pair</label>
                  <Select
                    options={currencyOptionSelect}
                    value={optionSelectValue}
                    onChange={optionSelect}
                    onInputChange={optionSearch}
                    isLoading={isLoading}
                    placeholder={isLoading ? "Loading..." : "Select Type..."}
                    isClearable={true}
                    // styles={customStyles}
                    maxMenuHeight={200}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label className='form-label'>Chart Time</label>
                  <select onChange={(event) => setChart_time(event.target.value)} className="form-select rounded-0">
                    <option value=''>Select Time</option>
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
                <div className="col-md-4 mb-3">
                  <label className='form-label'>Chart Analysis</label>
                  <select onChange={(event) => setChart_analysis(event.target.value)} className="form-select rounded-0">
                    <option value=''>Select Type</option>
                    <option value="smc">SMC - Smart Money Concept</option>
                    <option value="mmc">MMC - Mirror Market Concept</option>
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <label className='form-label'>Trading Statagy</label>
                  <input type="text" onChange={(event) => setTrading_statagy(event.target.value)} className='form-control rounded-0' placeholder='Pinnent reversal' required />
                </div>
                <div className="col-md-4 mb-3">
                  <label className='form-label'>Market Trand</label>
                  <select onChange={(event) => setMarket_trand(event.target.value)} className="form-select rounded-0">
                    <option value=''>Select Trand</option>
                    <option value="up_trand">Up Trand</option>
                    <option value="down_trand">Down Trand</option>
                    <option value="side_wadge">Side Wadge</option>
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Market Session</label>
                  <select onChange={(event) => setMarket_session(event.target.value)} className="form-select rounded-0">
                    <option value=''>Select Session</option>
                    <option value="london">London</option>
                    <option value="new_york">New York</option>
                    <option value="tokyo">Tokyo</option>
                    <option value="sydney">Sydney</option>
                  </select>
                </div>

                <div className="col-md-12 border-bottom border-dark mt-3 mb-4"></div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Broker Name</label>
                  <input type="text" onChange={(event) => setBroker_name(event.target.value)} className='form-control rounded-0' placeholder='Exness' required />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Broker Type</label>
                  <select onChange={(event) => setBroker_type(event.target.value)} className="form-select rounded-0">
                    <option value=''>Select Type</option>
                    <option value="real">Real</option>
                    <option value="demo">Demo</option>
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Trading Type</label>
                  <select onChange={(event) => setTrading_type(event.target.value)} className="form-select rounded-0">
                    <option value=''>Select Type</option>
                    <option value="scalping_trading">Scalping Trading</option>
                    <option value="reversal_trading">Reversal Trading</option>
                    <option value="breakout_trading">Breakout Trading</option>
                    <option value="news_trading">News Trading</option>
                    <option value="swing_trading">Swing Trading</option>
                    <option value="position_trading">Position Trading</option>
                    <option value="intraday_trading">Intraday Trading</option>
                    <option value="market_trend">Market Trend</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Lot Size</label>
                  <input type="text" onChange={(event) => setLot_size(event.target.value)} className='form-control rounded-0' placeholder='0.01' required />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Buy or Sell</label>
                  <select onChange={(event) => setBuy_or_sell(event.target.value)} className="form-select rounded-0">
                    <option value=''>Select Type</option>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Risk to Reward</label>
                  <input type="text" onChange={(event) => setRisk_to_reward(event.target.value)} className='form-control rounded-0' placeholder='1 : 2' required />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>SL/TP Amounts</label>
                  <input type="text" onChange={(event) => setSl_tp_amounts(event.target.value)} className='form-control rounded-0' placeholder='500' required />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Trading Status</label>
                  <select onChange={(event) => setTrading_status(event.target.value)} className="form-select rounded-0">
                    <option value=''>Select Type</option>
                    <option value="profit">Profit</option>
                    <option value="loss">Loss</option>
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Trade Close By</label>
                  <select onChange={(event) => setTrade_close_by(event.target.value)} className="form-select rounded-0">
                    <option value=''>Select Type</option>
                    <option value="stop_loss">Stop Loss</option>
                    <option value="take_profit">Take Profit</option>
                    <option value="close_manually">Close Manually</option>
                    <option value="stop_loss_by_tralling">Stop Loss By Tralling</option>
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Attachment</label>
                  <input type="file" accept="image/*,application/pdf" onChange={(event) => setAttachment(event.target.files[0])} className='form-control rounded-0' />
                </div>
                <div className="col-md-8 mb-3">
                  <label className='form-label'>Note</label>
                  <textarea onChange={(event) => setNote(event.target.value)} rows='1' placeholder='write your experience...!' className='form-control rounded-0' />
                </div>
                <div className='col-md-12 my-4'>
                  <div className="row">
                    <div className="col-md-6 mt-3">
                      <Link to='/trading-journal' type="reset" className='btn btn-dark rounded-0 w-100'>Cancel</Link>
                    </div>
                    <div className="col-md-6 mt-3">
                      <button type="submit" className='btn btn-dark rounded-0 w-100'>Create New</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Journal_Create