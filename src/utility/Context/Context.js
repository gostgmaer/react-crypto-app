// import sublinks from "Applications/StripeMenu/data";
import React, { useState, useReducer, useContext, useEffect } from "react";
import { notifyerror, notifySuccess } from "../Notify/notify";
import { v4 as uuidv4 } from "uuid";
import { invokeAPI } from "../invokeAPI/invokeAPI";

// import Reducer from "./reducer";
const AppContext = React.createContext();

// const initialState = {};

const AppProvider = ({ children }) => {
  //   const [state, dispatch] = useReducer(Reducer, initialState);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [page, setPage] = useState();
  const [location, setLocation] = useState({});
  const [loading, setloading] = useState(true);
  const [Amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('inr');
  const [count, setCount] = useState(1);
  const [Text, setText] = useState("");
  const [expanseHistory, setExpanseHistory] = useState([]);
  const [interval, setinterval] = useState('day');
  const [days, setDays] = useState('1');

  const addExpanse = (e) => {
    e.preventDefault();
    setExpanseHistory([
      ...expanseHistory,
      { id: uuidv4(), name: Text, amount: Amount },
    ]);

    notifySuccess(
      <div>
        Title: {Text} and City: {Amount} has added{" "}
      </div>,
      2000
    );
    setloading(false);
    setText("");
    setAmount(0);
    setTimeout(console.log("expanseHistory", expanseHistory), 2000);
  };

  const changeCurrencyValue = (value)=>{
    setCurrency(value)
    console.log(currency);
  }

  const countReduce = () => {
    count < 1 ? setCount(1) : setCount(count - 1);
  };
  const countIncrease = () => {
     setCount(count + 1);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    // const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const apicALL = async (endpoint, method, body, query, data) => {
    const headerParams = { accept: "application/json" };
    setloading(true)
    try {
      const res = await invokeAPI(endpoint,method,body,headerParams,query);
      data(res);
      setTimeout(() => {
        setloading(false);
      }, 100);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  const UpdatePageCount= (page)=>{
    setCount(page)
  }
    // useEffect(() => {
    //     apicALL()
    // }, [count]);
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        openSubmenu,
        closeSubmenu,
        closeSidebar,
        setExpanseHistory,
        page,
        countReduce,
        countIncrease,
        count,
        setCount,
        location,
        addExpanse,
        Amount,changeCurrencyValue,currency,
        Text,
        expanseHistory,apicALL,
        loading,
        setAmount,interval, setinterval,
        setText,days, setDays,UpdatePageCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
