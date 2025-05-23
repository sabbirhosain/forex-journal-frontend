import { IoIosArrowDown } from 'react-icons/io'
import { MdCurrencyExchange, MdDashboardCustomize, MdDoubleArrow, MdOutlineFeaturedPlayList } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
import logo from "../../assets/dashboard.png"
import { NavLink, useLocation } from 'react-router-dom'
import { BiCandles } from "react-icons/bi";
import { GiChart } from "react-icons/gi";
import { FaCircleDollarToSlot } from 'react-icons/fa6';
import { BsJournalText } from "react-icons/bs";
import "./Style.css"


const Sidebar = () => {
  const URL = useLocation()

  return (
    <div className="sidebar">
      <div className="offcanvas offcanvas-start offcanvas_sidebar" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <NavLink to={"/"} className="d-flex align-items-center gap-2">
            <img src={logo} className='dashboard_logo_img' alt="logo" />
            <span className='dashboard_logo_text'>Trade Journal</span>
          </NavLink>
          <button type="button" className="btn-close offcanvas_close_btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="dropdown_item pb-5">

            <li className="dropdown_list">
              <NavLink to={"/"} className="dropdown_btn">
                <span className="dropdown_list_name"><MdDashboardCustomize className="dropdown_list_icon" />Dashboard</span>
              </NavLink>
            </li>

            <li className="dropdown_list">
              <NavLink to={"/trading-journal"} className="dropdown_btn">
                <span className="dropdown_list_name"><BsJournalText className="dropdown_list_icon" />Trading Journal</span>
              </NavLink>
            </li>

            <li className="dropdown_list">
              <NavLink to={"/money-management"} className="dropdown_btn">
                <span className="dropdown_list_name"><FaCircleDollarToSlot className="dropdown_list_icon" />Money Management</span>
              </NavLink>
            </li>

            <li className="dropdown_list">
              <NavLink to={"/currency-pairs"} className="dropdown_btn">
                <span className="dropdown_list_name"><MdCurrencyExchange className="dropdown_list_icon" />Currency Pairs</span>
              </NavLink>
            </li>

            <li className="dropdown_list">
              <NavLink to={"/candlestick-patterns"} className="dropdown_btn">
                <span className="dropdown_list_name"><BiCandles className="dropdown_list_icon" />Candlestick Patterns</span>
              </NavLink>
            </li>

            <li className="dropdown_list">
              <NavLink to={"/chart-patterns"} className="dropdown_btn">
                <span className="dropdown_list_name"><GiChart className="dropdown_list_icon" />Chart Patterns</span>
              </NavLink>
            </li>

            <div className="accordion accordion-flush" id="accordionFlushExample">

              <li className="dropdown_list">
                <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePayment2" aria-expanded="false" aria-controls="flush-collapsePayment2">
                  <span className="dropdown_list_name">
                    <GrTransaction className="dropdown_list_icon" />Transaction</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </button>

                <div id="flush-collapsePayment2" className={URL.pathname === "#" || URL.pathname === "#" || URL.pathname === "#" ? `accordion-collapse collapse show` : `accordion-collapse collapse hide`} aria-labelledby="flush-headingPayment2" data-bs-parent="#accordionFlushExample">
                  <NavLink to={"#"} className="dropdown_link"><MdDoubleArrow />Deposit to Broker</NavLink>
                  <NavLink to={"#"} className="dropdown_link"><MdDoubleArrow />Withdraw Money</NavLink>
                  <NavLink to={"#"} className="dropdown_link"><MdDoubleArrow />Transfer to Bank</NavLink>
                </div>
              </li>


              <li className="dropdown_list">
                <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseReports" aria-expanded="false" aria-controls="flush-collapseReports">
                  <span className="dropdown_list_name">
                    <MdOutlineFeaturedPlayList className="dropdown_list_icon" />Features</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </button>

                <div id="flush-collapseReports" className={URL.pathname === "#" || URL.pathname === "#" || URL.pathname === "#" ? `accordion-collapse collapse show` : `accordion-collapse collapse hide`} aria-labelledby="flush-headingReports" data-bs-parent="#accordionFlushExample">

                  <NavLink to={"#"} className="dropdown_link"><MdDoubleArrow />Sales Reports</NavLink>
                  <NavLink to={"#"} className="dropdown_link"><MdDoubleArrow />Transfer Reports</NavLink>
                  <NavLink to={"#"} className="dropdown_link"><MdDoubleArrow />Expense Reports</NavLink>
                </div>
              </li>

              <li className="dropdown_list">
                <NavLink to={"/settings"} className="dropdown_btn">
                  <span className="dropdown_list_name">
                    <IoSettings className="dropdown_list_icon" />Settings</span>
                </NavLink>
              </li>

            </div>
          </ul>
        </div>
      </div >
    </div >
  )
}

export default Sidebar