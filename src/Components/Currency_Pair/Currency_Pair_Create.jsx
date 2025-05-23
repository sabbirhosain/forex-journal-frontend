import Layout from '../../Layout/Layout'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { currency_pair_create } from '../../Api_Base_Url';

const Currency_Pair_Create = () => {
  const navigate = useNavigate();
  const [currencyPair, setCurrencyPair] = useState('')
  const [currenciesInvolved, setCurrenciesInvolved] = useState('')
  const [volatility, setVolatility] = useState('')
  const [liquidity, setLiquidity] = useState('')
  const [openAndCloseTime, setOpenAndCloseTime] = useState('')
  const [openAndCloseDay, setOpenAndCloseDay] = useState('')
  const [sessionName1, setSessionName1] = useState('london')
  const [startAndEndTimeGmt1, setStartAndEndTimeGmt1] = useState('')
  const [startAndEndTimeBdt1, setStartAndEndTimeBdt1] = useState('')
  const [sessionName2, setSessionName2] = useState('new_york')
  const [startAndEndTimeGmt2, setStartAndEndTimeGmt2] = useState('')
  const [startAndEndTimeBdt2, setStartAndEndTimeBdt2] = useState('')
  const [sessionName3, setSessionName3] = useState('tokyo')
  const [startAndEndTimeGmt3, setStartAndEndTimeGmt3] = useState('')
  const [startAndEndTimeBdt3, setStartAndEndTimeBdt3] = useState('')
  const [sessionName4, setSessionName4] = useState('sydney')
  const [startAndEndTimeGmt4, setStartAndEndTimeGmt4] = useState('')
  const [startAndEndTimeBdt4, setStartAndEndTimeBdt4] = useState('')
  const [bestSessionToTrade, setBestSessionToTrade] = useState('')
  const [note, setNote] = useState('')
  const [customErrorMessage, setCustomErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(currency_pair_create, {
        currency_pair: currencyPair,
        currencies_involved: currenciesInvolved,
        volatility: volatility,
        liquidity: liquidity,
        open_and_close_time: openAndCloseTime,
        open_and_close_day: openAndCloseDay,
        session_and_time: [
          { session_name: sessionName1, start_to_end_time_gmt: startAndEndTimeGmt1, start_to_end_time_bdt: startAndEndTimeBdt1 },
          { session_name: sessionName2, start_to_end_time_gmt: startAndEndTimeGmt2, start_to_end_time_bdt: startAndEndTimeBdt2 },
          { session_name: sessionName3, start_to_end_time_gmt: startAndEndTimeGmt3, start_to_end_time_bdt: startAndEndTimeBdt3 },
          { session_name: sessionName4, start_to_end_time_gmt: startAndEndTimeGmt4, start_to_end_time_bdt: startAndEndTimeBdt4 }
        ],
        best_session_to_trade: bestSessionToTrade,
        notes: note
      });

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
              <h4 className='text-center py-4'>Create Currency Pair</h4>
              <div className="row border-top border-dark pt-4">
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Currency Pair</label>
                  <input type="text" onChange={(event) => setCurrencyPair(event.target.value)} className='form-control rounded-0' required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Currencies Involved</label>
                  <input type="text" onChange={(event) => setCurrenciesInvolved(event.target.value)} className='form-control rounded-0' required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Volatility</label>
                  <select className="form-select rounded-0" onChange={(event) => setVolatility(event.target.value)}>
                    <option value="">Select New</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Liquidity</label>
                  <select className="form-select rounded-0" onChange={(event) => setLiquidity(event.target.value)}>
                    <option value="">Select New</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Open and Close Time</label>
                  <input type="text" onChange={(event) => setOpenAndCloseTime(event.target.value)} className='form-control rounded-0' placeholder='04:00 AM - 12:00 PM' required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Open and Close Day</label>
                  <input type="text" className='form-control rounded-0' onChange={(event) => setOpenAndCloseDay(event.target.value)} placeholder='Sunday - Friday' required />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Session Name</label>
                  <input type="text" className='form-control rounded-0' placeholder="London" onChange={(event) => setSessionName1(event.target.value)} readOnly />
                </div>
                <div className="col-md-4 mb-3">
                  <label className='form-label'>Start - End Time (GMT)</label>
                  <input type="text" className='form-control rounded-0' onChange={(event) => setStartAndEndTimeGmt1(event.target.value)} placeholder='10:00 AM - 12:30 PM' required />
                </div>
                <div className="col-md-4 mb-3">
                  <label className='form-label'>Start - End Time (BDT)</label>
                  <input type="text" className='form-control rounded-0' onChange={(event) => setStartAndEndTimeBdt1(event.target.value)} placeholder='10:00 AM - 12:30 PM' required />
                </div>

                <div className="col-md-4 mb-3">
                  <input type="text" className='form-control rounded-0' onChange={(event) => setSessionName2(event.target.value)} placeholder="New York" readOnly />
                </div>
                <div className="col-md-4 mb-3">
                  <input type="text" className='form-control rounded-0' onChange={(event) => setStartAndEndTimeGmt2(event.target.value)} placeholder='10:00 AM - 12:30 PM' required />
                </div>
                <div className="col-md-4 mb-3">
                  <input type="text" className='form-control rounded-0' onChange={(event) => setStartAndEndTimeBdt2(event.target.value)} placeholder='10:00 AM - 12:30 PM' required />
                </div>

                <div className="col-md-4 mb-3">
                  <input type="text" className='form-control rounded-0' onChange={(event) => setSessionName3(event.target.value)} placeholder="Tokyo" readOnly />
                </div>
                <div className="col-md-4 mb-3">
                  <input type="text" className='form-control rounded-0' onChange={(event) => setStartAndEndTimeGmt3(event.target.value)} placeholder='10:00 AM - 12:30 PM' required />
                </div>
                <div className="col-md-4 mb-3">
                  <input type="text" className='form-control rounded-0' onChange={(event) => setStartAndEndTimeBdt3(event.target.value)} placeholder='10:00 AM - 12:30 PM' required />
                </div>

                <div className="col-md-4 mb-3">
                  <input type="text" className='form-control rounded-0' onChange={(event) => setSessionName4(event.target.value)} placeholder="Sydney" readOnly />
                </div>
                <div className="col-md-4 mb-3">
                  <input type="text" className='form-control rounded-0' onChange={(event) => setStartAndEndTimeGmt4(event.target.value)} placeholder='10:00 AM - 12:30 PM' required />
                </div>
                <div className="col-md-4 mb-3">
                  <input type="text" className='form-control rounded-0' onChange={(event) => setStartAndEndTimeBdt4(event.target.value)} placeholder='10:00 AM - 12:30 PM' required />
                </div>

                <div className="col-md-6 mb-3">
                  <label className='form-label'>Best Session to Trade</label>
                  <input type="text" className='form-control rounded-0' onChange={(event) => setBestSessionToTrade(event.target.value)} placeholder='New York and London' required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Note</label>
                  <textarea rows='1' onChange={(event) => setNote(event.target.value)} placeholder='Write Something...' className='form-control rounded-0' />
                </div>

                <div className='col-md-12 my-4'>
                  <div className="row">
                    <div className="col-md-6 mt-3">
                      <Link to='/currency-pairs' type="reset" className='btn btn-dark rounded-0 w-100'>Cancel</Link>
                    </div>
                    <div className="col-md-6 mt-3">
                      <button type="submit" className='btn btn-dark rounded-0 w-100' disabled={loading}>
                        {loading ? 'Please wait...' : 'Create New'} </button>
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

export default Currency_Pair_Create