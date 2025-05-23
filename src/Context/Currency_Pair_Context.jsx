import React, { createContext, useContext, useState } from 'react'
import { currency_pair_destroy, currency_pair_show } from '../Api_Base_Url';
import axios from 'axios';
import Swal from "sweetalert2";

const CurrencyPairContextProvider = createContext()
const Currency_Pair_Context = ({ children }) => {

  // get currency pair
  const [isLoading, setIsLoading] = useState(false);
  const [currencyList, setCurrencyList] = useState({});
  const [volatilityFilter, setVolatilityFilter] = useState(null);
  const [liquidityFilter, setLiquidityFilter] = useState(null);
  const [sessionFilter, setSessionFilter] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');
  const [rowLimit, setRowLimit] = useState('');
  const [customErrorMessage, setCustomErrorMessage] = useState(null);
  const [currencyOptionSelect, setCurrencyOptionSelect] = useState({});
  const [optionSelectValue, setOptionSelectValue] = useState(null);

  const CurrencyPairFetch = async (page) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${currency_pair_show}?volatility=${volatilityFilter}&liquidity=${liquidityFilter}&session=${sessionFilter}&search=${searchFilter}&page=${page}&limit=${rowLimit}`);

      if (response && response.data) {
        if (response.data.success) {
          setCurrencyList(response.data);

          // get option filter data
          const data = response.data.payload;
          const optionsSelect = data?.map(item => ({
            value: item._id,
            label: item.currency_pair
          }));
          setCurrencyOptionSelect(optionsSelect);

        } else {
          console.log(response.data);
          setCustomErrorMessage(response.data || 'Something went wrong');
        }
      }

    } catch (error) {
      console.log(error);
      setCustomErrorMessage(error);

    } finally {
      setIsLoading(false);
    }
  }

  // ===== for react select dropdown ====================
  const optionSelect = (selectedOption) => { setOptionSelectValue(selectedOption) };
  const optionSearch = (searchOption) => { setSearchFilter(searchOption) };


  // delete currency pari
  const deleteItem = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`${currency_pair_destroy}${id}`);
          if (response && response.data) {
            Swal.fire('Deleted!', 'Item successfully deleted.', 'success');
            CurrencyPairFetch(1);
          }
        } catch (error) {
          Swal.fire('Error!', 'An error occurred while deleting.', 'error');
          console.log(error);
        }

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your item is safe :)', 'info');
      }
    });
  };












  return (
    <CurrencyPairContextProvider.Provider value={{ currencyList, volatilityFilter, liquidityFilter, sessionFilter, searchFilter, customErrorMessage, isLoading, CurrencyPairFetch, optionSearch, optionSelect, optionSelectValue, setVolatilityFilter, setLiquidityFilter, setSessionFilter, setSearchFilter, currencyOptionSelect, rowLimit, setRowLimit, deleteItem }}>
      {children}
    </CurrencyPairContextProvider.Provider>
  )
}

export default Currency_Pair_Context

// coustom hooks
export const useCurrencyPairContextProvider = () => {
  return useContext(CurrencyPairContextProvider)
};