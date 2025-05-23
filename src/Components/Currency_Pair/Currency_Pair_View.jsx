import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import { Link, useParams } from 'react-router-dom'
import { currency_pair_single } from '../../Api_Base_Url'
import axios from 'axios'

const Currency_Pair_View = () => {
  const { id } = useParams()
  const [CurrencyPair, setCurrencyPair] = useState({})

  useEffect(() => {
    const getFetchItem = async () => {
      try {
        const response = await axios.get(`${currency_pair_single}${id}`);
        setCurrencyPair(response.data.payload)
      } catch (error) {
        console.log(error);
      }
    }
    getFetchItem()
  }, []);
  console.log(CurrencyPair.session_and_time);


  return (
    <Layout>
      <section className='container my-5'>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form className='shadow-sm bg-white px-5 pt-3 pb-4'>
              <h4 className='text-center py-4'>Currency Prir Details</h4>
              <div className="row border-top border-warning pt-4">
                <div className="col-md-8 mb-3">
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <div className="row">
                        <div className="col-6"><span>Currency Pair</span></div>
                        <div className="col-1"><span>:</span></div>
                        <div className="col-5"><span>{CurrencyPair.currency_pair}</span></div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="row">
                        <div className="col-6"><span>Currencies Involved</span></div>
                        <div className="col-1"><span>:</span></div>
                        <div className="col-5"><span>{CurrencyPair.currencies_involved}</span></div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="row">
                        <div className="col-6"><span>Volatility</span></div>
                        <div className="col-1"><span>:</span></div>
                        <div className="col-5"><span>{CurrencyPair.volatility}</span></div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="row">
                        <div className="col-6"><span>Liquidity</span></div>
                        <div className="col-1"><span>:</span></div>
                        <div className="col-5"><span>{CurrencyPair.liquidity}</span></div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="row">
                        <div className="col-6"><span>Open & Close Time</span></div>
                        <div className="col-1"><span>:</span></div>
                        <div className="col-5"><span>{CurrencyPair.open_and_close_time}</span></div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="row">
                        <div className="col-6"><span>Open & Close Day</span></div>
                        <div className="col-1"><span>:</span></div>
                        <div className="col-5"><span>{CurrencyPair.open_and_close_day}</span></div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="row">
                        <div className="col-6"><span>Best Session To Trade</span></div>
                        <div className="col-1"><span>:</span></div>
                        <div className="col-5"><span>{CurrencyPair.best_session_to_trade}</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-12 mb-3'>
                  <div className="row border">
                    <div className="col-md-12">
                      <div className="row border-bottom py-2">
                        <div className="col-4"><span>Session Name</span></div>
                        <div className="col-4"><span>Session & Time (GMT)</span></div>
                        <div className="col-4"><span>Session & Time (BDT)</span></div>
                      </div>
                    </div>
                    {CurrencyPair.session_and_time && CurrencyPair.session_and_time.length > 0 && CurrencyPair.session_and_time.map((session, index) => (
                      <div className="col-md-12" key={session._id}>
                        <div className="row border-bottom py-2">
                          <div className="col-4"><span>{session.session_name}</span></div>
                          <div className="col-4"><span>{session.start_to_end_time_gmt}</span></div>
                          <div className="col-4"><span>{session.start_to_end_time_bdt}</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='col-md-8 mb-3'>
                  <div className="col-md-12 mb-3">
                    <div className="row">
                      <div className="col-6"><span>Best Session To Trade</span></div>
                      <div className="col-1"><span>:</span></div>
                      <div className="col-5"><span>{CurrencyPair.best_session_to_trade}</span></div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="row">
                      <div className="col-6"><span>Notes</span></div>
                      <div className="col-1"><span>:</span></div>
                      <div className="col-5"><span>{CurrencyPair.notes}</span></div>
                    </div>
                  </div>
                </div>

                <div className='col-md-12'>
                  <div className="row border-top pt-4">
                    <div className="col-md-6 mt-2">
                      <Link to='/currency-pairs' type="reset" className='btn btn-dark rounded-0 w-100'>Back</Link>
                    </div>
                    <div className="col-md-6 mt-2">
                      <Link to={`/currency-pairs/update/${id}`} type="reset" className='btn btn-dark rounded-0 w-100'>Update</Link>
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

export default Currency_Pair_View