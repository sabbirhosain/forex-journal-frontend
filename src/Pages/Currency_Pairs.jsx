import React from 'react'
import Layout from '../Layout/Layout'
import { MdFormatListBulletedAdd } from 'react-icons/md'
import Currency_Pair_Table from '../Components/Currency_Pair/Currency_Pair_Table'
import { Link } from 'react-router-dom'
import { useCurrencyPairContextProvider } from '../Context/Currency_Pair_Context'

const Currency_Pairs = () => {
    const { setVolatilityFilter, setLiquidityFilter, setSessionFilter, setSearchFilter } = useCurrencyPairContextProvider();

    return (
        <Layout title='Currency Pairs'>
            <section className=''>
                <div className='d-flex align-items-center justify-content-between bg-white p-3 ps-3 pe-md-5 my-2'>
                    <h2 className='table_name_title'>Currency Pair List</h2>
                    <Link to='/currency-pairs/create' className='btn btn-outline-primary btn-sm rounded-0'><MdFormatListBulletedAdd /></Link>
                </div>

                <div className="row bg-white pt-3 px-3 pb-1">
                    <div className="col-md-3 mb-2">
                        <div className='w-100 mb-3 mb-md-0'>
                            <select className="form-select rounded-0" onChange={(event) => setLiquidityFilter(event.target.value)}>
                                <option value=''>Filter By Liquidity</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2">
                        <div className='w-100 mb-3 mb-md-0'>
                            <select className="form-select rounded-0" onChange={(event) => setVolatilityFilter(event.target.value)}>
                                <option value=''>Filter By Volatility</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2">
                        <div className='w-100 mb-3 mb-md-0'>
                            <select className="form-select rounded-0" onChange={(event) => setSessionFilter(event.target.value)}>
                                <option value=''>Filter By Session</option>
                                <option value="london">London</option>
                                <option value="new_york">New York</option>
                                <option value="tokyo">Tokyo</option>
                                <option value="sydney">Sydney</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='w-100'>
                            <input type="search" onChange={(event) => setSearchFilter(event.target.value)} className="form-control rounded-0" placeholder="Search Hear..." />
                        </div>
                    </div>
                </div>

                <div className='mt-2'>
                    <Currency_Pair_Table />
                </div>
            </section>
        </Layout>
    )
}

export default Currency_Pairs