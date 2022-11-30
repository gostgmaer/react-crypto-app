import axios from "axios";
import { notifySuccess, notifyerror } from "../Notify/notify";





const baseURL = process.env.REACT_APP_COINGECKO_URL;
export const invokeAPI = async (
  endpoint,
  method,
  body,
  headerParams,
  queryParam
) => {
  const option = {
    method: method,
    url: baseURL + endpoint,
    headers: headerParams,
    params: queryParam,
    data: body,
  };
  let response;
  try {
    response = await axios.request(option);
    notifySuccess("data fetch Successfully!...", 2000);
  } catch (e) {
    notifyerror(e.message, 2000);
    throw new Error(e.message);
  }

  // if success return value
  return response?.data ? response?.data : null; // or set initial value
};
