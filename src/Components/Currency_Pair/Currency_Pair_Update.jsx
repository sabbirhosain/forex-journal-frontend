import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { currency_pair_single, currency_pair_update } from '../../Api_Base_Url';
import { toast } from 'react-toastify';

const Currency_Pair_Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [customErrorMessage, setCustomErrorMessage] = useState('');
  const [CurrencyPair, setCurrencyPair] = useState({
    currency_pair: "",
    currencies_involved: "",
    volatility: "",
    liquidity: "",
    open_and_close_time: "",
    open_and_close_day: "",
    session_name1: "london",
    start_and_end_time_gmt1: "",
    start_and_end_time_bdt1: "",
    session_name2: "new_york",
    start_and_end_time_gmt2: "",
    start_and_end_time_bdt2: "",
    session_name3: "tokyo",
    start_and_end_time_gmt3: "",
    start_and_end_time_bdt3: "",
    session_name4: "sydney",
    start_and_end_time_gmt4: "",
    start_and_end_time_bdt4: "",
    best_session_to_trade: "",
    note: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setCurrencyPair((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Get currency pair
  useEffect(() => {
    const getFetchItem = async () => {
      try {
        const response = await axios.get(`${currency_pair_single}${id}`);
        const data = response.data.payload
        setCurrencyPair({
          currency_pair: data.currency_pair,
          currencies_involved: data.currencies_involved,
          volatility: data.volatility,
          liquidity: data.liquidity,
          open_and_close_time: data.open_and_close_time,
          open_and_close_day: data.open_and_close_day,
          best_session_to_trade: data.best_session_to_trade,
          note: data.notes,
          session_name1: "london",
          start_and_end_time_gmt1: data.session_and_time[0]?.start_to_end_time_gmt,
          start_and_end_time_bdt1: data.session_and_time[0]?.start_to_end_time_bdt,
          session_name2: "new_york",
          start_and_end_time_gmt2: data.session_and_time[1]?.start_to_end_time_gmt,
          start_and_end_time_bdt2: data.session_and_time[1]?.start_to_end_time_bdt,
          session_name3: "tokyo",
          start_and_end_time_gmt3: data.session_and_time[2]?.start_to_end_time_gmt,
          start_and_end_time_bdt3: data.session_and_time[2]?.start_to_end_time_bdt,
          session_name4: "sydney",
          start_and_end_time_gmt4: data.session_and_time[3]?.start_to_end_time_gmt,
          start_and_end_time_bdt4: data.session_and_time[3]?.start_to_end_time_bdt,
        })
      } catch (error) {
        console.log(error);
      }
    }
    getFetchItem()
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(`${currency_pair_update}${id}`, {
        currency_pair: CurrencyPair.currency_pair,
        currencies_involved: CurrencyPair.currencies_involved,
        volatility: CurrencyPair.volatility,
        liquidity: CurrencyPair.liquidity,
        open_and_close_time: CurrencyPair.open_and_close_time,
        open_and_close_day: CurrencyPair.open_and_close_day,
        best_session_to_trade: CurrencyPair.best_session_to_trade,
        note: CurrencyPair.note,
        session_and_time: [
          { session_name: "london", start_to_end_time_gmt: CurrencyPair.start_and_end_time_gmt1, start_to_end_time_bdt: CurrencyPair.start_and_end_time_bdt1 },
          { session_name: "new_york", start_to_end_time_gmt: CurrencyPair.start_and_end_time_gmt2, start_to_end_time_bdt: CurrencyPair.start_and_end_time_bdt2 },
          { session_name: "tokyo", start_to_end_time_gmt: CurrencyPair.start_and_end_time_gmt3, start_to_end_time_bdt: CurrencyPair.start_and_end_time_bdt3 },
          { session_name: "sydney", start_to_end_time_gmt: CurrencyPair.start_and_end_time_gmt4, start_to_end_time_bdt: CurrencyPair.start_and_end_time_bdt4 },
        ]
      })

      if (response && response.data) {
        if (response.data.success) {
          navigate("/currency-pairs");
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
          <div className="col-md-8">
            <form onSubmit={handleSubmit} className='shadow-sm bg-white px-5 pt-3 pb-4'>
              <h4 className='text-center py-4'>Update Currency Pair</h4>
              <div className="row border-top border-dark pt-4">
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Currency Pair</label>
                  <input type="text" name='currency_pair' value={CurrencyPair.currency_pair || ""} onChange={handleChange} className='form-control rounded-0' required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Currencies Involved</label>
                  <input type="text" name='currencies_involved' value={CurrencyPair.currencies_involved || ""} onChange={handleChange} className='form-control rounded-0' required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Volatility</label>
                  <select className="form-select rounded-0" name='volatility' value={CurrencyPair.volatility || ""} onChange={handleChange}>
                    <option value="">Select New</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Liquidity</label>
                  <select className="form-select rounded-0" name='liquidity' value={CurrencyPair.liquidity || ""} onChange={handleChange}>
                    <option value="">Select New</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Open and Close Time</label>
                  <input type="text" name='open_and_close_time' value={CurrencyPair.open_and_close_time || ""} onChange={handleChange} className='form-control rounded-0' placeholder='04:00 AM - 12:00 PM' required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Open and Close Day</label>
                  <input type="text" name='open_and_close_day' value={CurrencyPair.open_and_close_day || ""} onChange={handleChange} className='form-control rounded-0' placeholder='Sunday - Friday' required />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Session Name</label>
                  <input type="text" className='form-control rounded-0' placeholder="London" readOnly />
                </div>
                <div className="col-md-4 mb-3">
                  <label className='form-label'>Start - End Time (GMT)</label>
                  <input type="text" name='start_and_end_time_gmt1' value={CurrencyPair.start_and_end_time_gmt1 || ""} onChange={handleChange} className='form-control rounded-0' placeholder='10:00 AM - 12:30 PM' required />
                </div>
                <div className="col-md-4 mb-3">
                  <label className='form-label'>Start - End Time (BDT)</label>
                  <input type="text" name='start_and_end_time_bdt1' value={CurrencyPair.start_and_end_time_bdt1 || ""} onChange={handleChange} className='form-control rounded-0' placeholder='10:00 AM - 12:30 PM' required />
                </div>

                <div className="col-md-4 mb-3">
                  <input type="text" name='session_name2' onChange={handleChange} className='form-control rounded-0' placeholder="New York" readOnly />
                </div>
                <div className="col-md-4 mb-3">
                  <input type="text" name='start_and_end_time_gmt2' value={CurrencyPair.start_and_end_time_gmt2 || ""} onChange={handleChange} className='form-control rounded-0' placeholder='10:00 AM - 12:30 PM' required />
                </div>
                <div className="col-md-4 mb-3">
                  <input type="text" name='start_and_end_time_bdt2' value={CurrencyPair.start_and_end_time_bdt2 || ""} onChange={handleChange} className='form-control rounded-0' placeholder='10:00 AM - 12:30 PM' required />
                </div>

                <div className="col-md-4 mb-3">
                  <input type="text" name='session_name3' onChange={handleChange} className='form-control rounded-0' placeholder="Tokyo" readOnly />
                </div>
                <div className="col-md-4 mb-3">
                  <input type="text" name='start_and_end_time_gmt3' value={CurrencyPair.start_and_end_time_gmt3 || ""} onChange={handleChange} className='form-control rounded-0' placeholder='10:00 AM - 12:30 PM' required />
                </div>
                <div className="col-md-4 mb-3">
                  <input type="text" name='start_and_end_time_bdt3' value={CurrencyPair.start_and_end_time_bdt3 || ""} onChange={handleChange} className='form-control rounded-0' placeholder='10:00 AM - 12:30 PM' required />
                </div>

                <div className="col-md-4 mb-3">
                  <input type="text" name='session_name4' onChange={handleChange} className='form-control rounded-0' placeholder="Sydney" readOnly />
                </div>
                <div className="col-md-4 mb-3">
                  <input type="text" name='start_and_end_time_gmt4' onChange={handleChange} className='form-control rounded-0' value={CurrencyPair.start_and_end_time_gmt4 || ""} placeholder='10:00 AM - 12:30 PM' required />
                </div>
                <div className="col-md-4 mb-3">
                  <input type="text" name='start_and_end_time_bdt4' value={CurrencyPair.start_and_end_time_bdt4 || ""} onChange={handleChange} className='form-control rounded-0' placeholder='10:00 AM - 12:30 PM' required />
                </div>

                <div className="col-md-6 mb-3">
                  <label className='form-label'>Best Session to Trade</label>
                  <input type="text" name='best_session_to_trade' value={CurrencyPair.best_session_to_trade || ""} onChange={handleChange} className='form-control rounded-0' placeholder='New York and London' required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Note</label>
                  <textarea rows='1' name='note' value={CurrencyPair.note || ""} onChange={handleChange} placeholder='Write Something...' className='form-control rounded-0' />
                </div>

                <div className='col-md-12 my-4'>
                  <div className="row">
                    <div className="col-md-6 mt-3">
                      <Link to='/currency-pairs' type="reset" className='btn btn-dark rounded-0 w-100'>Cancel</Link>
                    </div>
                    <div className="col-md-6 mt-3">
                      <button type="submit" className='btn btn-dark rounded-0 w-100' disabled={loading}>
                        {loading ? 'Please wait...' : 'Update Now'} </button>
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

export default Currency_Pair_Update